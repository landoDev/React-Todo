import React from 'react'



class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        }
    }    

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.task);
        // console.log('handle submit', this.state.task)
        this.setState({
            task: ""
        });
        console.log('state on submit', this.state)
      };
    handleChanges = event => {
        console.log('target', event.target.value)
        this.setState({
          task: event.target.value,
        })
        // console.log('handle state',this.state) // handling changes effectively
      }
    render(){
        return(
            <div className='todo-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>New Todo Item: </label>
                    <input type='text'placeholder='Input Task Here' onChange={this.handleChanges} value={this.state.task}></input>
                    <button type='submit'>Add Item</button>
                    <button type='button'>Clear Completed</button>
                </form>
            </div>
        )
    }


}

export default TodoForm