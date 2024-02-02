import { get } from 'aws-amplify/api'
import { useState, useEffect } from 'react';

export default function DataFetcher(){
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  useEffect(()=>{
    async function fetchData(){
      try {
        const restOperation = get({
          apiName: 'PAForwardv2',
          path: '/prisma-app2-HelloWorldFunction-LGK3kT3fl4z0'
        });
        const { body } = await restOperation.response;
        const result = await body.text();
        // JSON.parse(result);
        console.log('GET call succeeded: ', result);
        setData(result);
        setLoading(false);
      } catch(error){
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
    },[]);
    return data
}