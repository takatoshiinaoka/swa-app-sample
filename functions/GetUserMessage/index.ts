import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  if (req.query.user == null || req.query.user == "") {
    context.res = {
      status: 400,
      body: "user is required.",
    };
    return;
  }

  context.res = { body: context.bindings.UserMessageEntity };
};

export default httpTrigger;
