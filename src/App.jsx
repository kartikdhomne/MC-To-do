import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = () => {
    // *** Simply add todo****
    // if (input.trim() !== "") {
    //   setTodo([...todo, input]);
    //   setInput("");
    // }

    // *** For Edit todo****
    if (input.trim() !== "") {
      if (editIndex !== null) {
        setTodo(
          todo.map((value, index) => (index === editIndex ? input : value))
        );
        setEditIndex(null);
      } else {
        setTodo([...todo, input]);
      }
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setInput(todo[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        placeholder="type something"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>
        {editIndex === null ? "Add Todo" : "Save"}{" "}
      </button>
      <ul>
        {todo.map((todo, index) => (
          <>
            <span>
              <li key={index}>{todo}</li>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>delete</button>
            </span>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
