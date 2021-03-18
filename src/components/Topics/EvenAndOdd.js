import React, { Component } from 'react';

class EvenAndOdd extends Component {
  render(){
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) } />
        <button className='confirmationButton' onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
        <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)} </span>
        <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)} </span>
      </div>
    )
  }

  constructor(){
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }
  handleChange(value){
    this.setState({ userInput: value })
  }

  assignEvenAndOdds(userInput){
    let nums = userInput.split(',');
    let even = [];
    let odd = [];

    for(let i = 0; i < nums.length; i++){
      if(nums[i] % 2 === 0){
        even.push(parseInt(nums[i], 10));
      }else{
        odd.push(parseInt(nums[i], 10));
      }
    }
    this.setState({ evenArray: even, oddArray: odd})
  }

}
export default EvenAndOdd