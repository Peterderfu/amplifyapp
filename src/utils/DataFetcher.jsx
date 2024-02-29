import { get,put } from 'aws-amplify/api'
const API_NAME = 'PAForwardv2'
const PATH_GET = '/prisma-app2-HelloWorldFunction-LGK3kT3fl4z0'
const PATH_POST = '/api'
// async function DataFetcher(){
export async function doGet() {
  let result = '' 

  try {
    const restOperation = get({
      apiName: API_NAME,
      path: PATH_GET
    });
    const { body } = await restOperation.response;
    const data = await body.text();
    result = data.replace(/'/g, '"');
  } catch (error) {

  }
  return result;
};
export async function doPOST(fields) {
  let result = ''
  try {
    const restOperation = put({
      apiName: API_NAME,
      path: PATH_POST,
      // options: {
        // body: {"operation":"register","payload":fields}
        body: {operation:"register",payload:fields}
      // }
    });
    const { body } = await restOperation.response;
    const data = await body.text();
    result = data.replace(/'/g, '"');
  } catch (error) {

  }
  return result;
}
// export default doGet;
