import React, { Component } from 'react'
import styles from '../containers/styles'
const letterStyle = styles.letter
class Letter extends Component {
  render(){
    return (
      <div style={letterStyle}>{this.props.letter.value}</div>
    )
  }
}

export default Letter
