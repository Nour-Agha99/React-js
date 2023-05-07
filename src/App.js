import React from 'react';

function Counter() {

  const [count, setCount] = React.useState(0);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <p style={{ color: '#FFC107' }}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function ColorPalette() {

  const [color, setColor] = React.useState('#ffffff');
  const colors = ['red', 'blue', 'aquamarine', '#ffc107', '#123456', '#8a00ff'];

  const handleColorClick = (color) => {
    setColor(color);
  };

  return (
    <div style={{ backgroundColor: color, height: '78px;', margin: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '36px' }}>
      <div style={{ display: 'flex' }}>
        {colors.map((color, index) => (
          <button key={index} style={{ backgroundColor: color, width: '50px', height: '50px', margin: '5px', cursor: 'pointer', borderRadius: '50%', outline: '2px dashed black', border: 'none' }} onClick={() => handleColorClick(color)} />
        ))}
      </div>
    </div>
  );
}

function TodoApp() {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodoObj = { id: newId, description: newTodo };
    setTodos([...todos, newTodoObj]);
    setNewTodo('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 style={{ color: 'aliceblue' }}>Todo App</h1>
      <div>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} />
        <button onClick={handleAddTodo} >Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ color: 'aliceblue' }}>
            {
              `{ id: ${todo.id},
            description: ${todo.description}
               }`
            }
            <button style={{ marginLeft: '1rem' }} onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RegistrationForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [showData, setShowData] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErrorMessage('Please fill out all fields.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      setErrorMessage('');
      setShowData(true);
    }
  };

  const handleDelete = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setShowData(false);
  };

  return (
    <div>
      <h1 style={{ color: 'aliceblue' }} >Registration Form</h1>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {showData ? (
        <div>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <button onClick={handleDelete}>Delete Data</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ width: '295px', display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ color: 'aliceblue' }} htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ width: '295px', display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ color: 'aliceblue' }} htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div style={{ width: '295px', display: 'flex', justifyContent: 'space-between' }}>
            <label style={{ color: 'aliceblue' }} htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

function App() {

  return <div style={{ backgroundColor: '#1e1e1e', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh', padding: '3rem 0' }}>
    <h1 style={{ color: 'blue' }}>Nour</h1>
    <Counter />
    <ColorPalette />
    <TodoApp />
    <RegistrationForm />
  </div>
    ;
}

export default App;
