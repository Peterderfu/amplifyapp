import { get,post } from 'aws-amplify/api'
import { useHistory } from 'react-router-dom';
const API_NAME = 'PAForwardv2'
const PATH_GET = '/prisma-app2-HelloWorldFunction-LGK3kT3fl4z0'
const PATH_POST = '/api'
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
export async function DoPOST(fields) {
    // JSON example
    // {
    //   "payload": {
    //     "reg": [
    //       {
    //         "User": "user02",
    //         "OS": "Windows",
    //         "Device": "123456"
    //       },
    //       {
    //         "User": "user03",
    //         "OS": "Linux",
    //         "Device": "987654321"
    //       }
    //     ]
    //   },
    //   "operation": "register"
    // }
  let result = ''
  try {
    const restOperation = post({
      apiName: API_NAME,
      path: PATH_POST,
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

export async function PostUserDevice (fields){
  let result = ""
  result = DoPOST(fields)
  return result


}


