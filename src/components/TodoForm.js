import React from 'react'

const TodoForm = props => {
    return(
        <div className='todo-form'>
            <form>
                <label>New Todo Item: </label>
                <input type='text'placeholder='Input Task Here'></input>
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default TodoForm