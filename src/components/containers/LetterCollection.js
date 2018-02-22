import React, { Component } from 'react'
import styles from './styles'
const universalStyle = styles.universal
import Letter from '../presentation/Letter'
class LetterCollection extends Component {

  render(){
    const letters = this.props.squares.map((element, index) => {
      return <Letter
        key = {index}
        value ={this.props.squares[index]}
      />
    })
    return (
      <div style={universalStyle.flexContainer}>{letters}</div>
    )

  }
}

export default LetterCollection
