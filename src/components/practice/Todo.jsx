import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1); // Düzenleme indeksi, -1 ise düzenleme modu kapalı demektir

  const addTodo = () => {
    if (todo.trim() === "") return; // Boş todo eklemeyi engelle
    if (editIndex !== -1) {
      // Düzenleme modunda ise
      const updatedTodoList = todoList.map((item, index) =>
        index === editIndex ? todo : item
      );
      setTodoList(updatedTodoList);
      setEditIndex(-1); // Düzenleme modunu kapat
    } else {
      setTodoList([...todoList, todo]);
    }
    setTodo(""); // input alanını temizle
  };

  const deleteTodo = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  };

  const startEditTodo = (index) => {
    setEditIndex(index);
    setTodo(todoList[index]);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        className="border"
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>{editIndex !== -1 ? "Update" : "Add"}</button>
      <div>
        {todoList.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => startEditTodo(index)}>Edit</button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todo;
