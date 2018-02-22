import React, { Component } from 'react'
import styles from './styles'
const universalStyle = styles.universal
import Letter from '../presentation/Letter'
class Answer extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
  }
  // when the component renders pick a random anser
  componentDidMount(){
    let answers = ["hello", "world", "goodbye"]
    let answerArray = answers[Math.floor(Math.random() * answers.length)].split("");
    let updatedList = Object.assign([], this.state.list)
    answerArray.forEach((element, i) => {
      updatedList.push({'value': element, 'guessed': false})
    })
    console.log(updatedList)
    this.setState({
      list: updatedList
    })
  }
  render(){
    const answerItems = this.state.list.map((element, i) => {
      console.log('element ' +element)
      return (
        <div key={i}><Letter letter={element} /></div>
      )
    })
    return (
      <div style={universalStyle.flexContainer}>{answerItems}</div>
    )
  }
}

export default Answer
