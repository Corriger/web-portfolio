import React, { Component } from 'react'
import styled from 'styled-components'

// Note to Self: figure out webpack
const Image = styled.img`
  margin: 10px;
  padding: 5px;
  height: 150px;
  &:hover{
    box-shadow: 0px 10px 5px rgba(176,196,222,1);
  }
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
        return <a href={ artItem } target="_blank" rel="noopener noreferrer"><Image src={ artItem }/></a>
      })}
      </div>
    )
  }
}

export default TheArts
