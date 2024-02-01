import json
from  ztDevice.ztDevice import getPrismaAccessConn,ListLocalUsers
def handler(event, context):
    # print('received event:')
    # print(event)
    conn = getPrismaAccessConn()
    output = ListLocalUsers(conn)
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        # 'body': json.dumps('Hello from your new Amplify Python lambda!')
        'body': output
    }