import { get,put } from 'aws-amplify/api'
const API_NAME = 'PAForwardv2'
const PATH_GET = '/prisma-app2-HelloWorldFunction-LGK3kT3fl4z0'
// async function DataFetcher(){
async function doGet() {
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
async function doPOST(fields) {
  let result = ''
  try {
    const restOperation = put({
      apiName: API_NAME,
      path: API_NAME,
      options: {
        body: {"operation":"register","payload":fields}
      }
    });
    const { body } = await restOperation.response;
    const data = await body.text();
    result = data.replace(/'/g, '"');
  } catch (error) {

  }
  return result;
}
export default doGet;
