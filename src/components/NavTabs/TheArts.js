import React, { Component } from 'react'
import styled from 'styled-components'

// Note to Self: figure out webpack
const Image = styled.img`
  margin: 10px;
  padding: 5px;
  height: 150px;
  object-fit: contain;
  object-position: center;
  &:hover{
    box-shadow: 0px 5px 3px rgba(176,196,222,1);
  }
  @media only screen and (max-width: 480px){
    width: 100%;
    margin: 0 auto;
    padding: 10px;
  }
  &:hover{
    box-shadow: none;
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
