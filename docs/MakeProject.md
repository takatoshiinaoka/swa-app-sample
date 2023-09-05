# プロジェクトの作成

Reactプロジェクトを作成

```bash
npm create vite@latest react-app -- --template react
cd react-app/
```

React Routerをインストール

```bash
npm install react-router-dom localforage match-sorter sort-by
mkdir src/routes
touch src/routes/Home.jsx
touch src/routes/MyPage.jsx
```

Functionプロジェクトを作成

```bash
func init api --typescript
cd api
func new --name GetAllTweet --template "HTTP trigger" --authlevel "anonymous"
func new --name GetUserTweet --template "HTTP trigger" --authlevel "anonymous"
func new --name PostTweet --template "HTTP trigger" --authlevel "anonymous"
```

swa-cli.config.json を作成します。

```bash
swa init
```

swa-cli.config.json を確認します。

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "swa-aadb2c-auth-sample": {
      "appLocation": "frontend",
      "apiLocation": "api",
      "outputLocation": "dist",
      "apiLanguage": "node",
      "apiVersion": "16",
      "appBuildCommand": "npm run build",
      "apiBuildCommand": "npm run build --if-present",
      "run": "npm run dev",
      "appDevserverUrl": "http://localhost:5173"
    }
  }
}
```

認証情報の設定

```json
{
  "routes": [
    {
      "route": "/login",
      "redirect": "/.auth/login/github"
    },
    {
      "route": "/mypage",
      "allowedRoles": [
        "authenticated"
      ]
    },
    {
      "route": "/logout",
      "redirect": "/.auth/logout"
    }
  ]
}
```

SWAエミュレーターを起動します。

```bash
swa start
```
