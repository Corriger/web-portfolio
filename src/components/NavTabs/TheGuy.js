import React, { Component } from 'react'
import styled from 'styled-components'
import face from './misc/me.933bd7b3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Img = styled.img`
  display: block;
  width: 20%;
  margin: 20px auto;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(176,196,222,1);
`
const ContactInfo = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60px;
`
const Affiliates = styled(ContactInfo)`
  align-items: flex-end;
  justify-content: flex-end;
`
const Company = styled.img`
  height: 15px;
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

class TheGuy extends Component {
  render(){
    let company = importAll(require.context('./bzn', false, /\.(png|jpe?g|svg)$/))
    return(
      <div>
        <Img src={ face }/>
        <ContactInfo>
          <FontAwesomeIcon icon={ ['fas','at'] } size="3x" />
          <FontAwesomeIcon icon={ ['fab','github']  } size="3x" />
          <FontAwesomeIcon icon={ ['fas','phone']  } size="3x" />
          <FontAwesomeIcon icon={ ['fab','linkedin']  } size="3x" />
        </ContactInfo>
        <Affiliates>
          { company.map(
            (bznName, i) => {
              return <a href={ "./"+bznName }>
                <Company src={ "./"+bznName[i] } alt={ bznName[i] }/>
              </a>
          })
          }
        </Affiliates>
      </div>
    )
  }
}

export default TheGuy
