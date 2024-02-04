import { get } from 'aws-amplify/api'

async function DataFetcher(){
  let result = ''
        try {
        const restOperation = get({
          apiName: 'PAForwardv2',
          path: '/prisma-app2-HelloWorldFunction-LGK3kT3fl4z0'
        });
        const { body } = await restOperation.response;
        const data = await body.text();
        result = data.replace(/'/g, '"');
      } catch (error) {

      }
  return result;
};    
export default DataFetcher;
