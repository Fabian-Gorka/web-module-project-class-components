import React from 'react'
import './styled-components.css'


export default function TodoForm(props) {
    const { newTodo, onChange, addTodo} = props

    return (
        <>
            <div className = 'formBody'>
                <form className = 'todoForm' onSubmit={addTodo}>
                     <input 
                        id="new-todo"
                        name="new-todo"
                        type="text"
                        value={newTodo}
                        onChange={onChange}
                        placeholder='Add a new task!'
                    />
                    <button className= 'addBtn' type="submit" disabled={!newTodo}> + </button>
                </form>
            </div>
        </>
    )
} 