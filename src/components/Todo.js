import React from 'react'
import './styled-components.css'
export default function Todo(props) {
    const { todo, toggleCompleted,  } = props
    return (
    <section className = 'taskContainer'>
        <div className = 'listItems' onDoubleClick={_ => toggleCompleted(todo.id)}>
            <p
                style={{
                    textDecoration: todo.completed ? 'line-through' : ''
                }}
            >{todo.task}</p>
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={_ => toggleCompleted(todo.id)}
            />
             
        </div>
    </section>
         
    )
} 