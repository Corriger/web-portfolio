import React, { Component } from 'react'
import './style.css'
import terror16 from './terror-016.jpg'
import dt16 from './dt-016.png'
import hilda16 from './hilda-016.png'
import hildaDT from './hilda-devil.png'
import hildaKimono from './hilda-kimono.png'
import hildaGi from './hilda-training.png'
import dmc2dt from './dante-dt.png'
import terror17 from './terror-redo.png'
import A2 from './a2-art.png'
import blazigijinka from './blazigijinka.png'
import hilda17 from './hilda-sitting.png'
import hilda2 from './hilda-2.png'
import hilda1 from './hilda-1.png'

class TheArt extends Component{
  render(){
    return(
      <div className="TheArt">
        <img class="current" src={ hilda2 } alt=""/>
        <img src={ hilda1 } alt=""/>
        <img src={ hilda17 } alt=""/>
        <img src={ blazigijinka } alt=""/>
        <img src={ A2 } alt=""/>
        <img src={ terror17 } alt=""/>
        <img src={ dmc2dt } alt=""/>
        <img src={ hildaGi } alt=""/>
        <img src={ hildaKimono } alt=""/>
        <img src={ hildaDT } alt=""/>
        <img src={ hilda16 } alt=""/>
        <img src={ dt16 } alt=""/>
        <img src={ terror16 } alt=""/>
      </div>
    )
  }
}

export default TheArt
