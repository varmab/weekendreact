import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Todos from './Todos'
import Users from './Users'

class App extends React.Component {
  render(){
    var person={
      name:"Varma",
      age:46
    }
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Varma" password="12346789" year={2019} person={person}/>
          <Welcome year={2020} password="12346789"/>
          <Welcome title="Rani" password="12346789" year={2021}/>
        </header>
        <Users/>
      </div>
    );
  }
}

export default App;
