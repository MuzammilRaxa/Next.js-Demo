import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        addTodo(text);
        setText('');
    }
    return (
        <form onSubmit={handleSubmit} className='max-w-md flex mx-auto mt-20 bg-slate-200 border border-gray-200'>
            <input
                type='text'
                value={text}
                placeholder='Add todo...'
                onChange={(e) => setText(e.target.value)}
                className='w-80'
            />
            <button type='submit'>ADD</button>
        </form>
    )
}

export default TodoForm
