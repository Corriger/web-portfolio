import React, { Component } from 'react'
import HeadBanner from './components/HeadBanner'
import NavTabs from './components/NavTabs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(
  fab,
  fas
)

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
