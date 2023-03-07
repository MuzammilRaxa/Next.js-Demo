import React, { useState } from 'react'

const TodoList = ({ todos, deletTodo, updateTodo }) => {
    const [editing, setEditing] = useState(false)
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {/* <span>{todo.text}</span>
                    <botton OnClick={() => deletTodo(todo.id)}>Delete</botton>
                    <botton onClick={handleEdit}>Update</botton> */}
                    {editing ? (
                        <>
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <button onClick={handleSave}>Save</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </>
                    ) : (
                        <>
                            {todo.text}
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={() => deletTodo(todo.id)}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default TodoList
