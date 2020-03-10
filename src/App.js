import React from 'react';
import styled from 'styled-components';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const MainDiv = styled.div`
  background-color: #FFFFFF;
  border: 5px outset #000000;
  h2, p {
    text-align: center
  }
  .title{
    font-size: 4rem;
  }
  .subtitle {
    font-size: 2rem;
  }
`;
// Established an array to pass down to the list
const todo = []

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

  clearCompleted= clickedToClear => {
    this.setState({
      todo: this.state.todo.filter(item => {
        if (item.isCompleted !== true){
          return item;
        }
      })
    })
  }

  render() {
    return (
      <MainDiv>
        <h2 className='title'>Execute Order List</h2>
        <p className='subtitle'>An Imperial To-do App</p>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} />

      </MainDiv>
    );
  }
}

export default App;
