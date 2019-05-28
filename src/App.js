import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: "take out the trash",
        isComplete: false
      },
      {
        id: 2,
        text: "feed the dog",
        isComplete: false
      },
      {
        id: 3,
        text: "cook dinner",
        isComplete: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
  })
  }

  render(){
    return (
      <div className="App">
        {this.state.todos.map((todo, index)=>(
           <Todo
           text={todo.text}
           index={index}
           id={todo.id}
           isComplete={todo.isComplete}
           markComplete={this.markComplete}
           />
         ))}
      </div>
    );
  }  
}

export default App;