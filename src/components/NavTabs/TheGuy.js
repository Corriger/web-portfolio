import React, { Component } from 'react'
import styled from 'styled-components'
import face from './misc/me.933bd7b3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactInfo = styled.figure`
  position: absolute;
  background: black;
  border-right: 3px solid rgba(255,215,0,1);
  width: 25%;
  max-width: 360px;
  height: 100%;
`
const ContactImg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  border-bottom: 3px solid rgba(255,215,0,1);
  width: 100%;
`
const Links = styled.figcaption`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: column;
`
const ContactType = styled.span`
  padding: 0 0 0 15px;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
`
const Affiliates = styled.section`
  position: absolute;
  left: 0;
  bottom: 0;
  align-items: flex-end;
  justify-content: flex-end;
  border-right: none;
`
const Company = styled.img`
  height: 15px;
  width: 15px;
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
        <ContactInfo>
        <ContactImg src={ face }/>
          <Links>
            <a style={ { marginBottom: '15px' } } href="mailto:rsmoraldo2@gmail.com"><FontAwesomeIcon icon={ ['fas','at'] } size="3x" />
            <ContactType>rsmoraldo2@gmail.com</ContactType>
            </a>
            <a style={ { marginBottom: '15px' } } href="tel:+16176997450"><FontAwesomeIcon icon={ ['fas','phone']  } size="3x" />
            <ContactType>(617) 699-7450</ContactType>
            </a>
            <a style={ { marginBottom: '15px' } } href="https://github.com/Corriger" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ ['fab','github']  } size="3x" />
            <ContactType>Corriger (Roger M)</ContactType>
            </a>
            <a style={ { marginBottom: '15px' } } href="https://www.linkedin.com/in/roger-moraldo-00a646122/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ ['fab','linkedin']  } size="3x" />
            <ContactType>Roger Moraldo</ContactType>
            </a>
            <a style={ { marginBottom: '15px' } } href="./misc/Resume-9-28.pdf" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ ['fas','file']  } size="3x" />
            <ContactType>Résumé</ContactType>
            </a>
          </Links>
          <Affiliates as="section">
          { company.map(
            (bznName, i) => {
              return <a href={ "./"+bznName }>
              <Company src={ "./"+bznName[i] } alt={ bznName[i] }/>
              </a>
            })
          }
          </Affiliates>
        </ContactInfo>
      </div>
    )
  }
}

export default TheGuy
