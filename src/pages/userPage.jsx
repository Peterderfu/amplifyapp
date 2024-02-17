import { Flex ,Placeholder} from '@aws-amplify/ui-react';
import { NavBarHeader, SideBar } from '../ui-components';
import DataFetcher from '../utils/DataFetcher';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import MySideBar from '../my-components/MySideBar';
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

const RegisteredUsers = () => {
  let users = null;
  const [rows, setRows] = useState(null);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const resp = DataFetcher();
    resp.then(resp => {
      const user_json = JSON.parse(resp);
      users = user_json.data;
      setRows(parse(users.map(({ name, disabled, id }) => `<TableRow className=amplify-table__row><TableCell className=amplify-table__td>${name}</TableCell><TableCell className=amplify-table__td>${disabled ? "N" : "Y"}</TableCell><TableCell className=amplify-table__td>${id}</TableCell></TableRow>`).join('')));
      setLoading(false)
    });
  }, []);
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
        {/* <MySideBar /> */}
        <SideBar />
        <Table caption="Registered users" highlightOnHover={true} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Enable</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {loading?<Placeholder/>:rows}
          </TableBody>
        </Table>
      </Flex>
    </Flex>)
};
export default RegisteredUsers;