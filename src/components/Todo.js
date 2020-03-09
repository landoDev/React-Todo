import React from 'react';

const Todo = props => {
    return(
        <div className='todo'>
            <p>{props.task}</p>
        </div>
    ) 
}
export default Todo