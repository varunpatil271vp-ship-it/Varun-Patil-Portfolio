# Deploy portfolio to GitHub (varunpatil271vp-ship-it)

## 1. Install Git (if you haven’t)

- Download: **https://git-scm.com/download/win**
- Run the installer (defaults are fine).
- **Close and reopen** PowerShell or Cursor’s terminal after installing.

---

## 2. Create the new repo on GitHub

1. Go to **https://github.com/new**
2. Sign in as **varunpatil271vp-ship-it**
3. **Repository name:** `portfolio` (or e.g. `varun-patil-portfolio`)
4. **Public**
5. Do **not** check “Add a README” or “Add .gitignore”
6. Click **Create repository**
7. Leave the page open; you’ll need the repo URL

---

## 3. Run the deploy script

In **PowerShell** (or Cursor terminal):

```powershell
cd "C:\Users\Ragini Patil\.cursor\projects\C-Users-RAGINI-1-AppData-Local-Temp-5eed1122-baf5-4242-ac62-16bdbd2b6e2e"
.\deploy-to-github.ps1
```

If you used a **different repo name** (e.g. `varun-patil-portfolio`), run this instead after the script fails or before pushing:

```powershell
git remote remove origin
git remote add origin https://github.com/varunpatil271vp-ship-it/YOUR-REPO-NAME.git
git push -u origin main
```

---

## 4. Sign in when Git asks

- When `git push` runs, Git may ask for your GitHub username and password.
- **Password:** use a **Personal Access Token**, not your GitHub password.
  - GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**
  - Enable scope **repo**
  - Copy the token and paste it when Git asks for a password.

---

## 5. Repo link after a successful push

- **Repo:** `https://github.com/varunpatil271vp-ship-it/portfolio`  
  (or `https://github.com/varunpatil271vp-ship-it/YOUR-REPO-NAME` if you used another name.)

After this, you can import this repo in Vercel to get your live portfolio link.
