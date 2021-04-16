import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from "./Todo";
import db from './firebase';
import firebase from 'firebase';

function App() {

const [todos, setTodos] = useState(['abcn']);
const [input, setInput] = useState('');

useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
  } )
}, []);

const addTodo = (event) => {
  event.preventDefault();

  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setTodos([...todos, input]);
  setInput('');

}

  return (
    <div className="App">
     <h1> Make your todo list</h1>

     <form>

    <FormControl>
      <InputLabel> ✅ Write a Todo</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
    </FormControl>

     <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="primary">
     Add todo
    </Button>
     </form>

     <ul>
       {todos.map(todo => (
         <Todo todo={todo} />

        // <li>{todo}</li> ---before props(above line)
        ))} 
      
     </ul>
    </div>
  );
}

export default App;
