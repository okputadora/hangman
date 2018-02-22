import React, { Component } from 'react'
import styles from '../containers/styles'
const letterStyle = styles.letter
function Letter(props) {
  return (
    <div style={letterStyle} onClick={props.onClick}>{props.value}</div>
  )
}

export default Letter
