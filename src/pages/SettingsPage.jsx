import { Flex, Text, Divider, Button, SwitchField, Theme, ThemeProvider } from '@aws-amplify/ui-react';
import { NavBarHeader } from '../ui-components';
import { SideBar } from '../ui-components';
import { useNavigate } from 'react-router-dom';
import MySideBar from '../my-components/MySideBar';
const theme: Theme = {
  name: 'myTheme',
  tokens: {
    components: {
      Text: {
        fontFamily: { value: "Inter" },
        fontSize: { value: "16px" },
        fontWeight: { value: "400" },
        color: { value: "rgba(4,125,149,1)" },
        lineHeight: { value: "4px" },
        textAlign: { value: "left" },
        display: { value: "block" },
        direction: { value: "column" },
        justifyContent: { value: "unset" },
        letterSpacing: { value: "0.01px" },
        width: { value: "unset" },
        height: { value: "unset" },
        gap: { value: "unset" },
        alignItems: { value: "unset" },
        shrink: { value: "0" },
        position: { value: "relative" },
        padding: { value: "0px 0px 0px 0px" },
        whiteSpace: { value: "pre-wrap" }
      },
      Table: {
        data: {
          borderStyle: { value: 'none' }
        }
      },
    },
  },
};

export default function SettingsPage() {
  const navigate = useNavigate();
  const navigateToUserPage = () => {
    navigate('/RegisteredUsers', { replace: true });
  }

  const handleMouseEnter = (e) => {
    e.target.style.color = "grey"
    // e.target.style.cursor = "pointer"
  }
  const handleMouseLeave = (e) => {
    e.target.style.color = "maroon"
  }

  return (
    <ThemeProvider theme={theme} colorMode="light">
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
          <MySideBar onClick="javascript:navigateToUserPage()" />
          {/* <SideBar overrides={{ link40472481: { onClick: () => navigateToUserPage() } }} /> */}
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
              <Text>
                Profile
              </Text>
              <Text>
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
              <Text>
                Full name
              </Text>
              <Text>
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
              <Text>
                Title
              </Text>
              <Text>
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
              <Text>
                Company
              </Text>
              <Text>
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
    </ThemeProvider>
  )
}
