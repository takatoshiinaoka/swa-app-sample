import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { v4 as uuidv4 } from "uuid";

/**
 * Todoを追加する
 * @param context
 * @param req
 * @returns
 */
const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const userName = req.query.userName || (req.body && req.body.userName);
  const message = req.query.message || (req.body && req.body.message);

  // パラメーターのチェック
  if (userName == null || message == null) {
    context.res = {
      status: 400,
      body: "userName and message are required.",
    };
    return;
  }

  // Todoリストに追加
  context.bindings.tableBinding = [];
  context.bindings.tableBinding.push({
    PartitionKey: userName,
    RowKey: uuidv4(),
    Message: message,
  });

  // レスポンス
  context.res = { body: context.bindings.tableBinding };
};

export default httpTrigger;
