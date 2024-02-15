import React from 'react';
import { Link } from '@aws-amplify/ui-react';
// import { SideBar } from '../ui-components';
// import {MySideBarText} from './MySideBarText';
import MyIcon from "../ui-components/MyIcon";
import { Flex, Table, TableCell, TableRow, Text } from '@aws-amplify/ui-react';
import { CgUserList, CgUserAdd } from "react-icons/cg";

export default function MySideBar() {
  return (
    <Flex direction="column">
      <Table size="Default" highlightOnHover={true}>
        <TableRow>
          <Link><TableCell>
            <Flex
              id='userList'
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
              >
                <CgUserList />
              </Flex>
              <Text>Registered Users</Text></Flex></TableCell></Link>
        </TableRow>
        <TableRow>
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
              >
                <CgUserAdd />
              </Flex>
              <Text>Add Users</Text></Flex></TableCell></Link>
        </TableRow>

      </Table>
    </Flex>
  )
};
