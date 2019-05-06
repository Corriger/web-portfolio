import React, { Component } from 'react'
import github from './../NavTabs/github.png'
import './style.css'

class Refs extends Component {
  render() {
    return (
      <div className="Refs">
        <section>
          <p>(617) 699-7450</p>
          <a href="mailto:http://rsmoraldo2@gmail.com">Roger Moraldo</a>
          <a href="https://github.com/Corriger" target="_blank" rel="noopener noreferrer"><img src={ github } alt=""/>&nbsp;Corriger</a>
        </section>
        <section>
          <a href="http://www.resilientcoders.org/" target="_blank" rel="noopener noreferrer"><img src="http://www.resilientcoders.org/240b1ae66694d9765a99dd115cf08321.png" alt="res-coders"/></a>
        </section>
      </div>
    )
  }
}

export default Refs
