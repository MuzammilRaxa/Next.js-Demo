import React, { useState } from 'react'

const TodoItem = ({ deletTodo, todo, updateTodo }) => {

    const [editing, setEditing] = useState(false)
    const [text, setText] = useState('')

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        updateTodo(todo.id, text);
        setEditing(false);
    };

    const handleCancel = () => {
        setText(todo.text);
        setEditing(false);
    };

    return (
        <li key={todo.id}>
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
    )
}

export default TodoItem
