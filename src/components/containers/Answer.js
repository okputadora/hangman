import React, { Component } from 'react'
import styles from './styles'
import Letter from '../presentation/Letter'
class Answer extends Component {
  constructor(){
    super()
    this.state = {
      answer: []
    }
  }
  // when the component renders pick a random anser
  componentDidMount(){
    let answers = ["hello", "world", "goodbye"]
    let answerArray = answers[Math.floor(Math.random() * answers.length)].split("");
    let updatedAnswer = Object.assign([], answerArray)
    console.log(updatedAnswer)
    this.setState({
      answer: updatedAnswer
    })
  }
  render(){
    const answerItems = this.state.answer.map((element, i) => {
      console.log('element ' +element)
      return (
        <div key={i}><Letter letter={element} /></div>
      )
    })
    return (
      <div style={styles.alphabet}>{answerItems}</div>
    )
  }
}

export default Answer
