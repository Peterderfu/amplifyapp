import React from 'react';
import { Link } from '@aws-amplify/ui-react';
import { SideBar } from '../ui-components';
// import {MySideBarText} from './MySideBarText';

import { Flex, Table, TableCell, TableRow,Text } from '@aws-amplify/ui-react';

export default function MySideBar() {
    return(
    <Flex direction="column">
    <Table size="Default" highlightOnHover={true} variation="striped">
      <TableRow border-top="none" border-bottom="none">
      <Link><TableCell>
            <Text
                // highlightOnHover="true"
                // fontFamily="Inter"
                // fontSize="16px"
                // fontWeight="400"
                // color="rgba(4,125,149,1)"
                // lineHeight="24px"
                // textAlign="left"
                // display="block"
                // direction="column"
                // justifyContent="unset"
                // letterSpacing="0.01px"
                // width="unset"
                // height="unset"
                // gap="unset"
                // alignItems="unset"
                // shrink="0"
                // position="relative"
                // padding="0px 0px 0px 0px"
                // whiteSpace="pre-wrap"
                // children="Registered users"
              >Registered Users</Text></TableCell></Link>
      </TableRow>
      <TableRow>
        <TableCell>Add Users</TableCell>
      </TableRow>
    </Table>
  </Flex>
    )
    };
