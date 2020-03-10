// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo'

const TodoList = props => {
    console.log(props)
    return(
        <div>
        {props.todo.map(item=>{
            return <Todo key={item.id} id={item.id} task={item.task} isCompleted={item.isCompleted} toggleCompleted={props.toggleCompleted}/>
        })}
        </div>

    ) 

}

export default TodoList