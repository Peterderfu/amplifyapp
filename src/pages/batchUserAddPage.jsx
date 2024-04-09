import {
  DataRow,
  BatchAddUser
} from '../ui-components';
import {
  Flex,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Input,
  Button
} from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
import Papa from "papaparse";
import {PostUserDevice} from '../utils/DataFetcher';
// const sleep = ms => new Promise(r => setTimeout(r, ms));
const BatchUserAdd = () => {
  // const [rows, setRows] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);
  //State to store the values
  const [values, setValues] = useState([]);
  // State to store the postdata
  const [postData, setPostData] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];
        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        // Parsed Data Response in array format
        setParsedData(results.data);
        // Filtered Column Names
        setTableRows(rowsArray[0]);
        // Filtered Values
        setValues(valuesArray);
      },
    });
  };
  const SubmitMultiUsers = (event) => {
    
    let jsonObject = [];
    let postData = {};
    values.map((value, index) => {
      jsonObject.push({'User':value[0],'OS':value[1],'Device':value[2]})
    });
    postData['reg'] = JSON.parse(JSON.stringify(jsonObject))
    PostUserDevice(postData)
  };
  return (
    <div>
      <Table highlightOnHover={true} size="small">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>OS</TableCell>
            <TableCell>Device ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((value, index) => (
              <TableRow key={index}>
                <TableCell>{value[0]}</TableCell> 
                <TableCell>{value[1]}</TableCell>
                <TableCell>{value[2]}</TableCell>
              </TableRow>
              ))}
        </TableBody>
      </Table>
      <br />
      {/* <input */}
      <Flex direction="column">
      <Input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
        size = "small"
      />
      <Button variation="primary" size="small" onClick={SubmitMultiUsers}>Submit</Button>
      </Flex>
    </div>
  );
}

export default BatchUserAdd