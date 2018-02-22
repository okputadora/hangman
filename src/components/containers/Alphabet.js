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
    })
    return (
      <div style={universalStyle.flexContainer}>{letters}</div>
    )
  }
}

export default Alphabet
