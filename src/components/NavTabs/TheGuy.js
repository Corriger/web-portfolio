import React, { Component } from 'react'
import styled from 'styled-components'
import face from './misc/me.933bd7b3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Img = styled.img`
  display: block;
  margin: 15px 0;
  border-radius: 50% 5px 5px 5px;
  box-shadow: 10px 10px 20px rgba(176,196,222,1);
  width: 40%;
  height: calc(80% - 60px);
  object-fit: cover;
  object-position: center;
`
const ContactInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
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
          <a href="mailto:rsmoraldo2@gmail.com"><FontAwesomeIcon icon={ ['fas','at'] } size="3x" /></a>
          <a href="https://github.com/Corriger"><FontAwesomeIcon icon={ ['fab','github']  } size="3x" /></a>
          <a href="tel:+16176997450"><FontAwesomeIcon icon={ ['fas','phone']  } size="3x" /></a>
          <a href="https://www.linkedin.com/in/roger-moraldo-00a646122/"><FontAwesomeIcon icon={ ['fab','linkedin']  } size="3x" /></a>
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
