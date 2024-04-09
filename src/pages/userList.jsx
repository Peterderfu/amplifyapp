import { Collection, Flex ,Placeholder} from '@aws-amplify/ui-react';
import {doGet,PutUserDevice} from '../utils/DataFetcher';

import { useState, useEffect } from 'react';
// import parse from 'html-react-parser';
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  SwitchField,
  Button
} from '@aws-amplify/ui-react';
// const SubmitMultiUsers = (event) => {
//   let jsonObject = [];
//   let postData = {};
//   values.map((value, index) => {
//     jsonObject.push({'User':value[0],'OS':value[1],'Device':value[2]})
//   });
//   postData['reg'] = JSON.parse(JSON.stringify(jsonObject))
//   PostUserDevice(postData)
// };
const updateEnablity = (event) => {
  let jsonObject = [];
  let putData = {};
  const collection = document.getElementsByName("Enable")
  for (let i = 0; i < collection.length; i++) {
    jsonObject.push({'id':collection[i].id,'name':collection[i].testId,'disabled':!collection[i].checked})
  }
  putData['reg'] = JSON.parse(JSON.stringify(jsonObject))
  PutUserDevice(putData)
}
const UserList = () => {
  let users = null;
  const [rows, setRows] = useState(null);
  const [loading,setLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [enablity,setEnablity] = useState({});

  useEffect(() => {
    const resp = doGet();
    resp.then(resp => {
      const user_json = JSON.parse(resp);
      users = user_json.data;
      // setRows(parse(users.map(({ name, disabled, id }) => `<TableRow className=amplify-table__row><TableCell className=amplify-table__td>${name}</TableCell><TableCell className=amplify-table__td>${disabled ? "N" : "Y"}</TableCell><TableCell className=amplify-table__td>${id}</TableCell></TableRow>`).join('')));
      setRows(
          users.map(
            ({ name, disabled, id }) => <TableRow className='amplify-table__row'>
                                            <TableCell className='amplify-table__td'>{name}</TableCell>
                                            <TableCell className='amplify-table__td'>
                                              <SwitchField label='Enable' id={id} name='Enable' testId={name}
                                                           defaultChecked={!disabled} 
                                                           onChange={(e) => {setIsChecked(e.target.checked);
                                                                             setEnablity({[`${id}`]:e.target.checked})}}/>
                                            </TableCell>
                                            <TableCell className='amplify-table__td'>{id}</TableCell>
                                        </TableRow>
            )
        );
      setLoading(false);
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
      <Flex
        gap="0"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
      >
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
      </Flex><Button onClick={()=>updateEnablity()}>Submit</Button>
    </Flex>)
};
export default UserList;