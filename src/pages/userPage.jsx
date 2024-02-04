import { Flex, Text, Divider, Button, SwitchField, Link } from '@aws-amplify/ui-react';
// import { NavBarHeader, SideBar } from '../ui-components';
import { SideBar } from '../ui-components';
import DataFetcher from '../utils/DataFetcher';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';

import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

const BasicExample = () => {
  let users = null;
  const [rows, setRows] = useState(null);
  useEffect(() => {
    const resp = DataFetcher();
    resp.then(resp => {
      const user_json = JSON.parse(resp);
      users = user_json.data;
      console.log('Basic 1: ', users);
      setRows(parse(users.map(({ name, disabled, id }) => `<TableRow className=amplify-table__row><TableCell className=amplify-table__td>${name}</TableCell><TableCell className=amplify-table__td>${disabled ? "N" : "Y"}</TableCell><TableCell className=amplify-table__td>${id}</TableCell></TableRow>`).join('')));
    });
  }, []);
  return (<Flex direction="column">
    <Table caption="xxxxx" highlightOnHover={true} size="small">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Enable</TableCell>
          <TableCell>ID</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows}
      </TableBody>
    </Table>
  </Flex>)
};
export default BasicExample;