import React from 'react';
import styled from 'styled-components';
import './Todo.css'

const ItemDiv = styled.div`
    margin: 0 2%;
    p{
        font-size: 2rem;
    }
`;

const Todo = props => {
    // console.log('todo props', props)
    return(
        <ItemDiv onClick={() => props.toggleCompleted(props.id)}  className={`task ${props.isCompleted ? 'completed' : ''}`}>
            <p>{props.task}</p>
        </ItemDiv>
    ) 
}
export default Todo