import React, { Component } from 'react'
import './style.css'

class HeadBanner extends Component {
  title = "Professional Playground"

  render(){
    return(
      <section className="hero">
        <h1>{ this.title }</h1>
      </section>
    )
  }
}

export default HeadBanner
