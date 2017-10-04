import React, { Component } from 'react'
import HeadBanner from './components/HeadBanner'
import NavTabs from './components/NavTabs'
import Refs from './components/Refs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeadBanner/>
        <NavTabs/>
        <Refs/>
      </div>
    )
  }
}

export default App
