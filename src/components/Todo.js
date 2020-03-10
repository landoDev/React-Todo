import React from 'react';

import './Todo.css'

const Todo = props => {
    console.log('todo props', props)
    return(
        <div onClick={() => props.toggleCompleted(props.id)}  className={`task ${props.isCompleted ? 'completed' : ''}`}>
            <p>{props.task}</p>
        </div>
    ) 
}
export default Todo