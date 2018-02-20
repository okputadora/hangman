import React, { Component } from 'react'
import Letter from '../presentation/Letter'
import styles from '../containers/styles'
const alphabetStyle = styles.alphabet
class Alphabet extends Component {
  constructor(){
    super()
    this.state = {
      list: [
        {value: 'A', guessed: false},
        {value: 'B', guessed: false},
        {value: 'C', guessed: false},
        {value: 'D', guessed: false},
        {value: 'E', guessed: false},
        {value: 'F', guessed: false},
        {value: 'G', guessed: false},
        {value: 'H', guessed: false},
        {value: 'I', guessed: false},
        {value: 'J', guessed: false},
        {value: 'K', guessed: false},
        {value: 'L', guessed: false},
        {value: 'M', guessed: false},
        {value: 'N', guessed: false},
        {value: 'O', guessed: false},
        {value: 'P', guessed: false},
        {value: 'Q', guessed: false},
        {value: 'R', guessed: false},
        {value: 'T', guessed: false},
        {value: 'S', guessed: false},
        {value: 'U', guessed: false},
        {value: 'V', guessed: false},
        {value: 'W', guessed: false},
        {value: 'X', guessed: false},
        {value: 'Y', guessed: false},
        {value: 'Z', guessed: false}
      ]
    }
  }
  makeAGuess(){
    console.log("made a guess")
  }
  render(){
    const alphabetList = this.state.list.map((letter, i) => {
      return (
        <div onClick={this.makeAGuess.bind(this)} key={i}><Letter letter={letter} /></div>
      )
    })
    return (
      <div style={alphabetStyle}>{alphabetList}</div>
    )
  }
}

export default Alphabet
