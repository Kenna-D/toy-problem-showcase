import React, { Component } from 'react';

export default class Sum extends Component {
  constructor(){
    super();

    this.state = {
      num1: 0,
      num2: 0,
      sum: null
    };
  };

  handleChangeOne(value){
    this.setState({num1: parseInt(value, 10)});
  };
  handleChangeTwo(value){
    this.setState({num1: parseInt(value, 10)});
  };

  add(num1, num2){
    this.setState({sum: num1 + num2});
  };

  render(){
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={(e) => this.handleChangeOne(e.target.value)}/>
        <input className="inputLine" onChange={(e) => this.handleChangeTwo(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.add(this.state.num1, this.state.num2)}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
      
    )
  }
}