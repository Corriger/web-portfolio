import React, { Component } from 'react'
import './style.css'
import logo from './logo.png'
class HeadBanner extends Component {
  title = "Professional Playground"

  render(){
    return(
        <header>
          <img src={ logo } alt="roger-logo"/>
            <h1>{ this.title }</h1>
        </header>
    )
  }
}

export default HeadBanner
