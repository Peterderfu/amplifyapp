import React from 'react';
import { Link } from '@aws-amplify/ui-react';
import { SideBar } from '../ui-components';
// import {MySideBarText} from './MySideBarText';
import MyIcon from "../ui-components/MyIcon";
import { Flex, Table, TableCell, TableRow, Text } from '@aws-amplify/ui-react';

export default function MySideBar() {
  return (
    <Flex direction="column">
      <Table size="Default" highlightOnHover={true} variation="striped">
        <TableRow border-top="none" border-bottom="none">
          <Link><TableCell>
          <Flex
                gap="0"
                direction="row">
          <Flex
                gap="0"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                borderRadius="4px"
                padding="6px 6px 6px 6px"
                backgroundColor="rgba(233,249,252,1)"
                // {...getOverrideProps(overrides, "icon40472482")}
              >
          <MyIcon
                  width="18px"
                  height="18px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="content"
                /></Flex><Text>Registered Users</Text></Flex></TableCell></Link>
        </TableRow>
        <TableRow>
          <TableCell><Text>Add Users</Text></TableCell>
        </TableRow>
      </Table>
    </Flex>
  )
};
