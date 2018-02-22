import React, { Component } from 'react'
import Picture from '../containers/Picture'
import Answer from '../containers/Answer'
import Alphabet from '../containers/Alphabet'

class Board extends Component{
  constructor(props){
    super(props)
    let answers = ["hello", "world", "goodbye"]
    let answerArray = answers[Math.floor(Math.random() * answers.length)].split("")
    console.log("ANSWER ARRAY: " + answerArray)
    this.state = {
      unGuessed: "abcdefghijklmnopqrstuvwxyz".split(""),
      guessed: [],
      answer: answerArray,
      displayedAnswer: Array(answerArray.length).fill("_")
    }
  }
  handleGuess(i){
    console.log(i)
    let unGuessed = this.state.unGuessed
    const guess = unGuessed.splice(i, 1)
    let guessed = this.state.guessed
    const displayedAnswer = this.state.displayedAnswer
    console.log('answer: '+typeof this.state.answer)
    // check if this letter is in the answer
    if (this.state.answer.includes(guess[0])){
      // find all of the indexes of this guess in the answer
      const indexes = getAllIndexes(this.state.answer, guess[0])
      console.log(indexes)
      // loop through those indexes and add the guess the corresponding
      // index of the displayed answer
      indexes.forEach((element) => displayedAnswer[element] = guess[0])
    }
    else{
      guessed.push(guess)
    }
    this.setState({
      unGuessed: unGuessed,
      guessed: guessed,
      answer: this.state.answer,
      displayedAnswer: displayedAnswer
    })
  }
  render(){
    return (
      <div>
        <div>{this.state.displayedAnswer}</div>
          <Alphabet
            squares={this.state.unGuessed}
            onClick={(i) => this.handleGuess(i)}
          />
        <div>{this.state.guessed}</div>
      </div>
    )
  }
}
function getAllIndexes(arr, val) {
  var indexes = [];
  for(var i = 0; i < arr.length; i++) {
    console.log('arr[i] '+arr[i]+' val '+val)
    if (arr[i] === val) {
      console.log("pushing to indexes")
      indexes.push(i);
    }
  }
  return indexes;
}
export default Board
