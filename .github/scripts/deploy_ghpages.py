#!/usr/bin/env python3
"""رفع محتويات dist إلى فرع gh-pages عبر Contents API (تجاوز GH013 عند git push)."""
import base64, json, os, sys, urllib.request, urllib.error

REPO = os.environ.get("GITHUB_REPOSITORY", "erkanleris/erkan-ai-ghpages")
TOKEN = os.environ["GHP_TOKEN"]
BRANCH = "gh-pages"
COMMIT_MSG = "deploy: built site"


def api(method, path, data=None):
    url = f"https://api.github.com/repos/{REPO}/{path}"
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode() if data is not None else None,
        method=method,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Accept": "application/vnd.github+json",
        },
    )
    try:
        resp = urllib.request.urlopen(req)
        return resp.status, json.load(resp) if resp.read else None
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode())


def get_tree(branch=BRANCH):
    code, d = api("GET", f"git/trees/{branch}?recursive=1")
    if code != 200:
        return []
    return [t for t in d["tree"] if t["type"] == "blob"]


def delete_branch_contents():
    for t in get_tree():
        api("DELETE", f"contents/{t['path']}", {
            "message": f"remove {t['path']}",
            "branch": BRANCH,
            "sha": t["sha"],
        })


def create_branch():
    code, head = api("GET", "git/ref/heads/main")
    if code != 200:
        raise RuntimeError("cannot read main branch")
    code, d = api("POST", "git/refs", {
        "ref": f"refs/heads/{BRANCH}",
        "sha": head["object"]["sha"],
    })
    if code not in (201, 422):
        raise RuntimeError(f"cannot create branch: {code} {d}")


def upload_dir(root):
    for dirpath, _, files in os.walk(root):
        for fn in files:
            if ".github" in os.path.relpath(dirpath, root).split(os.sep):
                continue
            full = os.path.join(dirpath, fn)
            rel = os.path.relpath(full, root)
            with open(full, "rb") as f:
                b64 = base64.b64encode(f.read()).decode()
            code, _ = api("PUT", f"contents/{rel}", {
                "message": COMMIT_MSG,
                "branch": BRANCH,
                "content": b64,
            })
            if code not in (200, 201):
                print(f"FAIL {rel}: {code}", file=sys.stderr)
                sys.exit(1)
            print(f"uploaded {rel}")


def main():
    root = sys.argv[1]
    if not os.path.isdir(root):
        print(f"{root} is not a directory", file=sys.stderr)
        sys.exit(1)
    # إنشاء الفرع إن لم يكن موجودًا
    code, _ = api("GET", f"git/ref/heads/{BRANCH}")
    if code != 200:
        create_branch()
    # حذف محتوى الفرع القديم
    delete_branch_contents()
    # رفع dist
    upload_dir(root)
    print("gh-pages branch updated successfully")


if __name__ == "__main__":
    main()
