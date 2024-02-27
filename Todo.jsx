import React,{useState} from 'react'

export default function Todo() {

const [todos, setTodos] = useState([]);
const [todoInput, setTodoInput] = useState('');
const [error, setError] = useState('');

const handleAddTodo = () => {
    const trimmedTodo = todoInput.trim(); 
  
    if (trimmedTodo === '') {
      setError('Todo text cannot be blank');
      return;
    }
  
    if (trimmedTodo.length > 255) {
      setError('Todo text should be no more than 255 characters');
      return;
    }
  
    if (todos.includes(trimmedTodo)) {
      setError('Cannot have duplicate todo');
      return;
    }
  
    setTodos([...todos, trimmedTodo]); 
    setTodoInput(''); 
    setError(''); 
  }



const handleDeleteTodo = (index) => {
   
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  const handleInputKeyPress = (e) => {
     
       if (e.key === 'Enter') {
         handleAddTodo();
       }
     };



return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={handleInputKeyPress}
        placeholder="Enter new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
  {todos.map((todo, index) => (
    <li key={index} className="todoItem">
      <span style={{ marginRight: '10px' }}>{todo}</span>
      <button
        onClick={() => handleDeleteTodo(index)}
        className="deleteButton"
      >
        Delete
      </button>
    </li>
  ))}
</ul>
<style>
  {`
    .deleteButton {
      background-color: hsl(0, 80%, 70%);
      border-radius: 3px;
      visibility: hidden; 
    }

    .todoItem:hover .deleteButton {
      visibility: visible; 
  `}
</style>

    </div>
  );
}
