import React, { Component } from 'react'
import Picture from '../containers/Picture'
import Answer from '../containers/Answer'
import Alphabet from '../containers/Alphabet'

class Board extends Component{
  render(){
    return (
      <div>
        <div><Picture /></div>

        <div className="container">
        <div className="row">
          <div><Answer /></div>
          <Alphabet />
        </div>
        </div>
      </div>
    )
  }
}

export default Board
