import React from 'react'

const TodoForm = () => {
    return (
        <form>
            <input
                type='text'
                value={text}
                placeholder='Add todo...'
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    )
}

export default TodoForm
