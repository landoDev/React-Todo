import React from 'react'

const TodoForm = props => {
    console.log(props)
    return(
        <div className='todo-form'>
            <form>
                <label>New Todo Item: </label>
                <input type='text'placeholder='Input Task Here' onChange={props.handleChanges}></input>
                <button>Add Item</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm