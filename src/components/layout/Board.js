import React, { Component } from 'react'
import Picture from '../containers/Picture'
import Answer from '../containers/Answer'
import Alphabet from '../containers/Alphabet'

class Board extends Component{
  constructor(props){
    super(props)
    let answers = ["hello", "world", "goodbye"]
    let answerArray = answers[Math.floor(Math.random() * answers.length)].split("")
    this.state = {
      unGuessed: "abcdefghijklmnopqrstuvwxyz".split(""),
      guessed: [],
      answer: answerArray
    }
  }
  handleGuess(element){
    console.log(element)
  }
  render(){
    return (
      <div>
        <div>{this.state.unGuessed[0]}</div>
          <Alphabet
            squares={this.state.unGuessed}
            onClick={(element) => this.handleGuess(element)}
          />
      </div>
    )
  }
}

export default Board
