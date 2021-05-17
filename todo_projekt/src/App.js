import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState("");
  return (
    <div className="App">
      <header>
      <h1>Gamze's ToDo List</h1>
      </header>
      <Form todos={todos} setInputText={setInputText}/>
      <TodoList/>
    </div>
  );
}

export default App;
