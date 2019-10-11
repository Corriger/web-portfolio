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
    (item) => { return images[item.replace('./', '')] = r(item) }
  )
  console.log(images)
  return images
}

class TheArts extends Component {
  render(){
    let images = importAll(require.context('./art', false, /\.(png|jpe?g|svg)$/))
    return(
      <div>
        { images.map(
          (imgName, i) => {
            return <a href={ "./"+imgName }>
              <Image src={ "./"+imgName[i] } alt={ imgName[i] }/>
            </a>
        })
        }
      </div>
    )
  }
}

export default TheArts
