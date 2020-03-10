// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import styled from 'styled-components';
import Todo from './Todo'

const ListDiv= styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: wrap;
`;
const TodoList = props => {
    // console.log(props)
    return(
        <ListDiv>
        {props.todo.map(item=>{
            return <Todo key={item.id} id={item.id} task={item.task} isCompleted={item.isCompleted} toggleCompleted={props.toggleCompleted}/>
        })}
        </ListDiv>

    ) 

}

export default TodoList