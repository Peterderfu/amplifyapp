
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { AddUser, studioTheme } from '../ui-components';
import UserList from "./userList";
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import {DoPOST} from '../utils/DataFetcher';

async function PostUserDevice (fields){
  // const PostUserDevice = (fields) =>{
  let result = ""
  result = DoPOST(fields)
  return result
}

const UserAdd = () => {
  const navigate = useNavigate()
  return (
      <AddUser 
      //Refer to https://docs.amplify.aws/react/build-ui/formbuilder/data-binding/
        onSubmit={async fields => { 
          await PostUserDevice(fields);
          navigate("/userList"); }
        }
      />
  );
};

export default UserAdd;
