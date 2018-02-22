import React, { Component } from 'react'
import Picture from '../containers/Picture'
import LetterCollection from '../containers/LetterCollection'
import Alphabet from '../containers/Alphabet'

class Board extends Component{
  constructor(props){
    super(props)
    let answers = ["hello", "world"]
    let answerArray = answers[Math.floor(Math.random() * answers.length)].split("")
    console.log(answerArray.toString())
    this.state = {
      unGuessed: "abcdefghijklmnopqrstuvwxyz".split(""),
      guessed: [],
      answer: answerArray,
      displayedAnswer: Array(answerArray.length).fill("_"),
      numGuesses: 6,
      status: 'You have 6 guesses'
    }
  }
  handleGuess(i){
    let unGuessed = this.state.unGuessed
    const guess = unGuessed.splice(i, 1)
    let guessed = this.state.guessed
    const displayedAnswer = this.state.displayedAnswer
    let numGuesses = this.state.numGuesses
    let status = this.state.status;
    // if they;ve already won ignore their click
    if (displayedAnswer.indexOf("_") == -1 || numGuesses == 0){
      return;
    }
    // check if this letter is in the answer
    if (this.state.answer.includes(guess[0])){
      // find all of the indexes of this guess in the answer
      const indexes = getAllIndexes(this.state.answer, guess[0])
      // loop through those indexes and add the guess the corresponding
      // index of the displayed answer
      indexes.forEach((element) => displayedAnswer[element] = guess[0])
      // check for a winner
      if (displayedAnswer.indexOf("_") == -1){
        status = "You've won!";
      }
    }
    else{
      guessed.push(guess)
      numGuesses--
      if (numGuesses == 0){status = "You've lost"}
      else if(numGuesses == 1){status = "you have 1 guess left"}
      else {status = "you have "+numGuesses+" guesses left"}
    }
    this.setState({
      unGuessed: unGuessed,
      guessed: guessed,
      displayedAnswer: displayedAnswer,
      numGuesses: numGuesses,
      status: status,
    })
  }
  render(){

    return (
      <div className='container'>
        <h1>Hangman w/ React</h1>
        <p>I've already picked a word ... Just start guessing</p>
        <p>{this.state.status}</p>
        <div className='row'>
          <h3 className='text-center'>Answer</h3>
          <LetterCollection
            squares={this.state.displayedAnswer}
          />
        <h3 className='text-center'>Remaining letters</h3>
          <Alphabet
            squares={this.state.unGuessed}
            onClick={(i) => this.handleGuess(i)}
          />
        <h3 className='text-center'>Letters guessed</h3>
          <LetterCollection
            squares={this.state.guessed}
          />
        </div>
        <p>open the console to reveal the answer</p>
      </div>
    )
  }
}
function getAllIndexes(arr, val) {
  var indexes = [];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      indexes.push(i);
    }
  }
  return indexes;
}
export default Board
