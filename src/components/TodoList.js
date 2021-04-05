import React from 'react'

import Todo from './Todo'


export default function TodoList(props) {
    const { todos, toggleCompleted, clearCompleted } = props
    return (
        <div className = 'list'>
            <ul className = 'items'>
                {todos.map(todo => (
                     <li key={todo.id}>
                         <Todo  
                            todo={todo} 
                            toggleCompleted={toggleCompleted} 
                            clearCompleted={clearCompleted}
                        />
                    </li>
                
                    ))}
            </ul>
            <button className = 'clearBtn' onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
} 