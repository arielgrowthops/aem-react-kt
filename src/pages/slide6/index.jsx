import React, { useState, useContext } from "react";
import TodoContext from "./TodoContext";
import TodoItem from "./TodoItem";

const Slide6 = () => {
  const [newTask, setNewTask] = useState('');
  const { task, addTask, removeTask } = useContext(TodoContext);
  
  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="add task" />

      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {task.map((item, index) => (
            <TodoItem key={index} task={item} onRemove={() => removeTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default Slide6;