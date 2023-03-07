import React, { useState } from 'react'
import TodoItem from '../todo-item'

const TodoList = ({ todos, deletTodo, updateTodo }) => {

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} deletTodo={deletTodo} todo={todo} updateTodo={updateTodo} />
            ))}
        </ul>
    )
}

export default TodoList
