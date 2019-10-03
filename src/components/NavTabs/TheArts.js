import React, { Component } from 'react'
import styled from 'styled-components'

// Note to Self: figure out webpack

function importAll(r) {
  let images = {}
  r.keys().map(
    (item, index) => { return images[item.replace('./', '')] = r(item) }
  )
  return images
}

class TheArts extends Component {
  render(){
    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/))
    return(
      <div>
        { images.map(
          (imgName) => {
            return <img src={ images[imgName] } alt="butt"/>
        })
        }
      </div>
    )
  }
}

export default TheArts
