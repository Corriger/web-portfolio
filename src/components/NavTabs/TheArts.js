import React, { Component } from 'react'
import styled from 'styled-components'

// Note to Self: figure out webpack
const Image = styled.img`
  width: 15%;
  height: 150px;
  object-fit: contain;
  object-position: center;
`

function importAll(r) {
  let images = []
  r.keys().map(
    (item) => { return images[item.replace('./', '')] = images.push(r(item)) }
  )
  return images
}

class TheArts extends Component {
  render(){
    const artwork = importAll(require.context('./../imgs/art', false, /\.(png|jpe?g|svg)$/))
    console.log(artwork)
    return(
      <div>
      { artwork.map(
        (artItem) => {
        return <Image src={ artItem }/>
      })}
      </div>
    )
  }
}

export default TheArts
