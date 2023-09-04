# API

## エンドポイント

| エンドポイント | 説明 |
| - | - |
| /api/GetAllMessage | 全ての投稿を返す |
| /api/GetUserMessage | 指定したユーザーの投稿を返す |
| /api/PostMessage | 投稿を保存する |


## ローカルの環境変数

local.settings.json に以下のように記述する。

```jsonc
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "MyStorageConnectionAppSetting": "UseDevelopmentStorage=true"
  }
}
```

## Azureの環境変数

| 変数名 | 説明 | 値 |
| - | - | - |
| AzureWebJobsStorage | Azure Functions作成時に一緒に作られるStorage | - |
| MyStorageConnectionAppSetting | テーブル用に自分で作成するStorage | - |
