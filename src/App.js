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
      todo: todo,
      task: ''
    }
    // console.log(this.state.todo)
  };
  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state




  addTask = taskName =>{
    this.setState({
      todo: [...this.state.todo, {
        task: taskName,
        id: Date.now(),
        isCompleted: false
      }]
    });
    console.log(this.state)
  }

  toggleCompleted = clickedTodoId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === clickedTodoId) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList todo={this.state.todo} />

      </div>
    );
  }
}

export default App;
