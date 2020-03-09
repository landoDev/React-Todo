import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// Established an array to pass down to the list
const todo = [{
  task: 'Placeholder',
  id: Date.now(),
  isCompleted: false
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todo: todo
    }
    // this.state = {
    //   task: '',
    //   id: Date.now(),
    //   isCompleted: false
    // }
    console.log(this.state)
  };
  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  handleChanges = event => {
    this.setState({
      task: event.target.value
    })
    // console.log(this.state) // handling changes effectively
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleChanges={this.handleChanges}/>
        <TodoList todo={todo} />

      </div>
    );
  }
}

export default App;
