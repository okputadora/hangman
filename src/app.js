import React, { Component } from 'react'
import reactDOM from 'react-dom'
import Board from './components/layout/board'

class App extends Component {
  render(){
    return (
        <div>
          <Board />
        </div>
    )
  }
}

reactDOM.render(<App />, document.getElementById('root'))
