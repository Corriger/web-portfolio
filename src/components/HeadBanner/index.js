import React, { Component } from 'react'
import './style.css'
class HeadBanner extends Component {
  title = "Professional Playground"

  render(){
    return(
        <header>
            <h1>{ this.title }</h1>
        </header>
    )
  }
}

export default HeadBanner
