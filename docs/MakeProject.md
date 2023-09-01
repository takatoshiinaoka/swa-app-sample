# プロジェクトの作成

Nextプロジェクトを作成

```bash
npx create-next-app <app-name> 
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
      "appLocation": ".",
      "apiLocation": "api",
      "outputLocation": ".next",
      "apiLanguage": "node",
      "apiVersion": "16",
      "appBuildCommand": "npm run build",
      "apiBuildCommand": "npm run build --if-present",
      "run": "npm run dev",
      "appDevserverUrl": "http://localhost:3000"
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
