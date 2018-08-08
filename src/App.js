import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const TotalCranes = (props) => {
  return (
    <h2>
      {props.counter}
    </h2>
  )
};

class Button extends React.Component{
  handleClick = () => {
    this.props.onClickFunction();
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        I finished a crane!
      </button>      
    )
  };
};

class App extends Component {
  state = { counter:0 };

  incrementCounter = () =>{
    this.setState((prevState)=>({
      counter : prevState.counter + 1}    
    )
  )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='http://worldartsme.com/images/paper-crane-clipart-1.jpg' className="App-logo"  />
          <h1 className="App-title">1000 Paper Cranes</h1>
        </header>        
        <TotalCranes counter={this.state.counter} />
        <Button onClickFunction={this.incrementCounter}/>
      </div>
    );
  }
}

export default App;
