import React, { Component } from 'react'
import './style.css'
// languages
import html5 from './html5.png'
import css3 from './css3.png'
import sass from './sass.png'
import js from './js.png'
import jquery from './jquery.png'
import react from './react.svg'
import wp from './wp.png'
import ruby from './ruby.png'
// Coding
import jsfiddle from './jsfiddle.png'
import codepen from './codepen.png'
import github from './github.png'
import atom from './atom.png'
import vscode from './vs-code.png'
import repl from './repl.svg'
import jsbin from './jsbin.png'
// Images
import pixlr from './pixlr.png'
import gimp from './gimp.png'
import sai from './sai.png'
//  Wireframe
import uxpin from './uxpin.png'
import figma from './figma.png'

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
          <img src={ ruby } alt=""/>
        </div>
        <strong>Coding Platforms</strong>
        <div className="lan">
          <img src={ codepen } alt=""/>
          <img src={ github } alt=""/>
          <img src={ atom } alt=""/>
          <img src={ vscode } alt=""/>
          <img src={ repl } alt=""/>
          <img src={ jsbin } alt=""/>
          <img src={ jsfiddle } alt=""/>
        </div>
        <strong>Image Editors</strong>
        <div className="lan">
          <img src={ pixlr } alt=""/>
          <img src={ gimp } alt=""/>
          <img src={ sai } alt=""/>
        </div>
        <strong>Wireframing</strong>
        <div className="lan">
          <img src={ figma } alt=""/>
          <img src={ uxpin } alt=""/>
        </div>
      </div>
    )
  }
}

export default TheMethods
