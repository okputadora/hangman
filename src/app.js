import React, { Component } from 'react'
import reactDOM from 'react-dom'

class App extends Component {
  render(){
    return (
        <div>Hello react</div>
    )
  }
}

reactDOM.render(<App />, document.getElementById('root'))
