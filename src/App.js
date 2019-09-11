import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import Tourlist from './components/Tourlist/Tourlist'
import "./App.css"
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Tourlist />
      </div>
    )
  }
}

export default App

