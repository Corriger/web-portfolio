import React, { Component } from 'react'
import './style.css'
//languages
import html5 from './html5.png'
import css3 from './css3.png'
import sass from './sass.png'
import js from './js.png'
import jquery from './jquery.png'
import react from './react.svg'
import wp from './wp.png'
//Other?
import github from './github.png'
import atom from './atom.png'
import gimp from './gimp.png'
import sai from './sai.png'

class TheMethods extends Component{
  render(){
    return(
      <div className="TheMethods">
        <strong>Languages</strong>
        <div className="lan">
          <img src={ html5 } alt=""/>
          <img src={ css3 } alt=""/>
          <img src={ sass } alt=""/>
          <img src={ js } alt=""/>
          <img src={ jquery } alt=""/>
          <img src={ react } alt=""/>
          <img src={ wp } alt=""/>
        </div>
        <strong>The Rest</strong>
        <div className="lan">
          <img src={ github } alt=""/>
          <img src={ atom } alt=""/>
          <img src={ gimp } alt=""/>
          <img src={ sai } alt=""/>
        </div>
      </div>
    )
  }
}

export default TheMethods
