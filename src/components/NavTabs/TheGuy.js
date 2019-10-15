import React, { Component } from 'react'
import styled from 'styled-components'
import face from './misc/me.933bd7b3.png'

import resume from './misc/Resume-9-28.pdf'

import resilient from './bzn/resilient-coders.png'
import nanigans from './bzn/nanigans.png'
import aaca from './bzn/aaca-boston.jpg'

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
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 100%;
  border-right: none;
`
const Company = styled.img`
  height: 30px;
  width: 30px;
  object-fit: contain;
  object-position: center;
`

class TheGuy extends Component {
  render(){
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
            <a style={ { marginBottom: '15px' } } href={ resume } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ ['fas','file']  } size="3x" />
            <ContactType>Résumé</ContactType>
            </a>
          </Links>
          <Affiliates as="section">
            <a href="https://www.resilientcoders.org/" target="_blank" rel="noopener noreferrer"><Company src={ resilient } alt="resilient coders"></Company></a>
            <a href="https://www.nanigans.com/" target="_blank" rel="noopener noreferrer"><Company src={ nanigans } alt="nanigans"></Company></a>
            <a href="https://aaca-boston.org" target="_blank" rel="noopener noreferrer"><Company src={ aaca } alt="asian american civic association boston"></Company></a>
          </Affiliates>
        </ContactInfo>
      </div>
    )
  }
}

export default TheGuy
