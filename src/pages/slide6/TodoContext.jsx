import React, { createContext, useState } from 'react';


const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [task, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const removeTask = (index) => {
        const updatedTasks = [...task];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    return (
        <TodoContext.Provider value={{ task, addTask, removeTask }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;