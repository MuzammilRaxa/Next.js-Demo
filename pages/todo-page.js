import React, { useState } from 'react'
import TodoForm from '../components/todo-form'
import TodoList from '../components/todo-list'


const TodoPage = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        setTodos([...todos, { id: todos.length + 1, text }])
    }
    const deletTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const updateTodo = (id, newText) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div>
            <TodoForm />
            <TodoList todos={todos} addTodo={addTodo} deletTodo={deletTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoPage
