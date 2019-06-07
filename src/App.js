import React, { Component } from 'react';
import User from './User';
import './App.css';

class App extends Component {
  state = {
    results: []
  }

  componentDidMount(){
    fetch('https://randomuser.me/api?results=25')
    .then((res) =>{
      return res.json();
    })
    .then((json)=>{
     json.results.forEach(user=>user.isHidden = true)
     this.setState({results: json.results})
    })
  }

  hide = (index) => {
    let copyOfResults = [...this.state.results];
    let clickedUser = copyOfResults[index];
    let tf = clickedUser.isHidden;
    clickedUser.isHidden = !tf;
    this.setState({results: copyOfResults})
  }

  render(){
    return (
      <div className="App">
        {this.state.results.map((user, index)=> (
          <User
          image={user.picture.thumbnail}
          name={user.name.first}
          index={index}
          key={index}
          hide={this.hide}
          hidden={user.isHidden}
          />
        )
      )}
      </div>
    );
  }  
}

export default App;