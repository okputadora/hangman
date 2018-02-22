import React, { Component } from 'react'
import Letter from '../presentation/Letter'
import styles from '../containers/styles'
const universalStyle = styles.universal
const letterStyle = styles.letter


class Alphabet extends Component {
  render(){
    const letters = this.props.squares.map((element, index) => {
      return <Letter
        key = {index}
        value ={this.props.squares[index]}
        onClick ={() => this.props.onClick(index)}
      />
    // ^^ onClick ={(...  is the only line that's different from the Word class
    // I wonder if I could somehow put that prop in an if statmente
    })
    return (
      <div style={universalStyle.flexContainer}>{letters}</div>
    )
  }
}

export default Alphabet
