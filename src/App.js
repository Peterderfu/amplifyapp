import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {ThemeProvider} from "@aws-amplify/ui-react";
import studioTheme from './ui-components/studioTheme';

import React, { useState, useEffect } from "react";
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listTodos } from "./graphql/queries";
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from "./graphql/mutations";
import {
  TodoCreateForm,
  ContactUs, 
 } from './ui-components';
Amplify.configure(config);
const client = generateClient();
const App = ({ signOut }) => {
  // function App ({ signOut }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const apiData = await client.graphql({ query: listTodos });
    const todosFromAPI = apiData.data.listTodos.items;
    setTodos(todosFromAPI);
  }

  async function createTodo(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    await client.graphql({
      query: createTodoMutation,
      variables: { input: data },
    });
    fetchTodos();
    event.target.reset();
  }

  async function deleteTodo({ id }) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    await client.graphql({
      query: deleteTodoMutation,
      variables: { input: { id } },
    });
  }
  return(
  <ThemeProvider theme={studioTheme}>
    <App />
  </ThemeProvider>
  );
  // return (<ContactUs />);
//   return (
//     <View className="App">
//       <Heading level={1}>My Todos App</Heading>
//       <View as="form" margin="3rem 0" onSubmit={createTodo}>
//         <Flex direction="row" justifyContent="center">
//           <TextField
//             name="name"
//             placeholder="Todo Name"
//             label="Todo Name"
//             labelHidden
//             variation="quiet"
//             required
//           />
//           <TextField
//             name="description"
//             placeholder="Todo Description"
//             label="Todo Description"
//             labelHidden
//             variation="quiet"
//             required
//           />
//           <Button type="submit" variation="primary">
//             Create Todo
//           </Button>
//         </Flex>
//       </View>
//       <Heading level={2}>Current Todos</Heading>
//       <View margin="3rem 0">
//         {todos.map((todo) => (
//           <Flex
//             key={todo.id || todo.name}
//             direction="row"
//             justifyContent="center"
//             alignItems="center"
//           >
//             <Text as="strong" fontWeight={700}>
//               {todo.name}
//             </Text>
//             <Text as="span">{todo.description}</Text>
//             <Button variation="link" onClick={() => deleteTodo(todo)}>
//               Delete todo
//             </Button>
//           </Flex>
//         ))}
//       </View>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
//   );
};

export default withAuthenticator(App);
// import { Amplify } from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import { generateClient } from 'aws-amplify/api';
// import '@aws-amplify/ui-react/styles.css';
// import config from './amplifyconfiguration.json';
// Amplify.configure(config);
// const client = generateClient();

// function App({ signOut, user }) {
//   return (
//     <>
//       <h1>Hello {user.username}</h1>
//       <button onClick={signOut}>Sign out</button>
//     </>
//   );
// }
// export default withAuthenticator(App);

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
