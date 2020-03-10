import React from 'react'
import styled from 'styled-components';


const FormDiv= styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 0 2% 2%;
        width: 100%;
        label{
            font-size: 2rem;
        }
        input{
            width: 15%;
            height: 4vh;
            margin: 1% 0
        }
        .buttons{
            display: flex;
            justify-content: space-between;
            width: 12%;
            button{
                border: 2px solid #000000;
                border-radius: 25px;
            }
            .add-btn{
                background-color: #394A59;
                color: #FFFFFF;
            }
            .clear-btn{
                background-color: #BC1E22;
                color: #FFFFFF;
            }
        }
    }

`;

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: '',
        }
    }    

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.task);
        // console.log('handle submit', this.state.task)
        this.setState({
            task: ""
        });
        // console.log('state on submit', this.state)
      };
    handleChanges = event => {
        // console.log('target', event.target.value)
        this.setState({
          task: event.target.value,
        })
        // console.log('handle state',this.state) // handling changes effectively
      }
    render(){
        return(
            <FormDiv className='todo-form'>
                <form onSubmit={this.handleSubmit}>
                    <label className='todo-label'>New Order: </label>
                    <input type='text'placeholder='Input Task Here' onChange={this.handleChanges} value={this.state.task}></input>
                    <div className='buttons'>
                        <button type='submit' className='add-btn'>Add Order</button>
                        <button type='button' className='clear-btn' onClick={()=> this.props.clearCompleted(this.state.isCompleted)}>Clear Executed</button>
                    </div>

                </form>
            </FormDiv>
        )
    }


}

export default TodoForm