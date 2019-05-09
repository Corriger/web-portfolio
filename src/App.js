import React, { Component } from 'react'
import HeadBanner from './components/HeadBanner'
import NavTabs from './components/NavTabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeadBanner/>
        <NavTabs/>
      </div>
    )
  }
}

export default App
