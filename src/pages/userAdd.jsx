import { AddUser, studioTheme } from '../ui-components';
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import {doPOST} from '../utils/DataFetcher';
// const updatedTheme = createTheme({
//   // Extend the theme to update the button color
//   name: "my-theme-updates",
//   tokens: {
//     components: {
//       div: {
//       // button:{
//         primary: {width: { value: "2000px" }}
//         // primary: {Color: { value: "#b71c1c" }}
//       },
//     },
//   }}, studioTheme)
const postUserDevice = (fields) =>{
  // event_post = {  
  //               "operation": "register",
  //               "payload": fields
  //             }
  doPOST(fields)
}

const UserAdd = () => {
  return (
    // <div className="bg home">
    //   <h1>Add user</h1>
    // </div>
    // <ThemeProvider theme={updatedTheme}>
      <AddUser 
      // onValidate={fields => {
      //   // User: (value,validationResponse) => {
      //     const value = fields['Field0'];
      //     if (value.match(/^[a-zA-Z0-9 -_]+$/) && value.length > 31){
      //       alert('1')
      //       return {
      //         hasError: true,
      //         errorMessage: 'Invalid User string'
      //       };
      //     }
      //     alert('2')
      //     return {
      //       hasError: false,
      //       errorMessage: ''
      //     };
      //   }
      // }
      //Refer to https://docs.amplify.aws/react/build-ui/formbuilder/data-binding/
        // onSubmit={fields => { alert(fields['User']) }}
        onSubmit={fields => { postUserDevice(fields) }}
      />
    // </ThemeProvider>
  );
};

export default UserAdd;
