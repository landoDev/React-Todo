import React from 'react';

const Todo = props => {
    console.log('todo props', props)
    return(
        <div onClick={() => props.toggleCompleted(props.id)}  className={`item${props.isCompleted ? 'isCompleted' : ''}`}>
            <p>{props.task}</p>
        </div>
    ) 
}
export default Todo