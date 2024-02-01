import json
from ztDevice import getPrismaAccessConn,ListLocalUsers
def handler(event, context):
    # print('received event:')
    # print(event)
    # conn = getPrismaAccessConn()
    # output = ListLocalUsers(conn)
    # print(output)
    return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('--------------------')
      
        # 'body':output
  }