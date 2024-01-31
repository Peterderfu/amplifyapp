import { Flex, Text, Divider, Button, SwitchField, Link } from '@aws-amplify/ui-react';
import { NavBarHeader, SideBar } from '../ui-components';
import { get } from 'aws-amplify/api'
import { useState } from 'react';
import { Amplify } from 'aws-amplify'
import { API } from 'aws-amplify'

async function getTodo() {
  try {
    const restOperation = get({
      apiName: 'PAForwarder',
      path: '/pa/1'
    });

    const { body } = await restOperation.response;
    // const response = await restOperation.response;
    // const result = await response.json;
    // console.log('GET call succeeded: ', response);
    const result = await body.text();
    console.log('GET call succeeded: ', result);
    // return response_text;
    return result;
  } catch (e) {
    console.log('GET call failed: ', e);
  }
  
}


export default function SettingsPage() {
  const resp = getTodo()
  
  // print(response)
  // const [response,setResponse] = useState("")
  // const resp = getTodo()
  // setResponse(resp)
  // function getTodo(){
  //   API.get('PAForwarder','/pa/1')
  //     .then(result => {
  //       setResponse(JSON.parse(result.body))})
  // }
  return (
  <Flex
    gap="0"
    direction="column"
    width="1440px"
    justifyContent="flex-start"
    alignItems="flex-start"
    overflow="hidden"
    position="relative"
    backgroundColor="rgba(255,255,255,1)"
  >
    <NavBarHeader />
    <Flex
      gap="0"
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      alignSelf="stretch"
      position="relative"
    >
      <SideBar />
      <Flex
        gap="16px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="32px 32px 32px 32px"
      >
        <Flex
          gap="8px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="32px 0px 12px 0px"
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            {/* Profile */}
            {resp}
          </Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            {/* <div>{response}</div> */}
          </Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
        />
        <Flex
          gap="16px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            width="300px"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Full name
          </Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Wesley Peck
          </Text>
          <Button
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
          >
            Edit
          </Button>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
        />
        <Flex
          gap="16px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            width="300px"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Title
          </Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Product Manager
          </Text>
          <Button
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
          >
            Edit
          </Button>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
        />
        <Flex
          gap="16px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            width="300px"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Company
          </Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            AWS
          </Text>
          <Button
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
          >
            Edit
          </Button>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
        />
        <Flex
          gap="16px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            width="300px"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Email address
          </Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            wpeck@aws.com
          </Text>
          <Button
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
          >
            Edit
          </Button>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
        />
        <Flex
          gap="8px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="32px 0px 12px 0px"
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Sync
          </Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            How you want to sync data across platforms
          </Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
        />
        <Flex
          gap="16px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            width="300px"
            shrink="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
            Automatic syncing
          </Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            whiteSpace="pre-wrap"
          >
             
          </Text>
          <SwitchField
            shrink="0"
            label="On"
            size="default"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="start"
          />
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
        />
        <Flex
          gap="16px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="32px 0px 0px 0px"
        >
          <Flex
            gap="8px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              whiteSpace="pre-wrap"
            >
              Delete account
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              whiteSpace="pre-wrap"
            >
              Not happy with the product? Delete your account and you'll never hear from us again.
            </Text>
          </Flex>
          <Button
            shrink="0"
            size="default"
            isDisabled={false}
            variation="warning"
          >
            Yes, delete my account
          </Button>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
  )
}
