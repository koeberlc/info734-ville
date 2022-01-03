import React, {useState} from 'react';
import Header from './components/header';
import Todo from './components/todo';
import List from './components/list';

const initialFormData = Object.freeze({
  nom: "",
  cp: ""
});

function App() {

  const [formData, updateFormData] = useState(initialFormData);

  const [todos, addTodos] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Todo todos={todos} addTodos={addTodos} formData={formData} updateFormData={updateFormData}/>
      <List todos={todos} setTodos={addTodos}/>
    </div>
  );
}

export default App;
