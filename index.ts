import {APIGatewayEvent, APIGatewayProxyResult, Context} from 'aws-lambda';
import HelloMomo from './indexService';
/**
 * Follow the guide https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html
 * @param event
 * @param context
 */

const HelloMomoService = new HelloMomo();

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event)}`);
  console.log(`Context: ${JSON.stringify(context)}`);
  return HelloMomoService.myFunc();
};
