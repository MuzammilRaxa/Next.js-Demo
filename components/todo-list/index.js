import React from 'react'

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <botton>Delete</botton>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
