import React, { Component } from 'react'
import styled from 'styled-components'
import face from './../imgs/misc/me.933bd7b3.png'
import logo from './../imgs/misc/logo.png'

import resume from './Resume-9-28.pdf'

import resilient from './../imgs/bzn/resilient-coders.png'
import nanigans from './../imgs/bzn/nanigans.png'
import aaca from './../imgs/bzn/aaca-boston.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactInfo = styled.figure`
  background: black;
  border-right: 2px solid rgba(255,215,0,1);
  width: 25%;
  height: 100%;
`
const ContactImg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  border-bottom: 2px solid rgba(255,215,0,1);
  width: 100%;
  height: 45%;
  object-fit: cover;
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
const AutoBio = styled(ContactInfo)`
  background: rgba(0,0,0,.5);
  padding: 5%;
  width: 75%;
  border-right: none;
  color: rgba(255,255,255,1);
  &:after{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    content: "";
    opacity: 1;
    z-index: -1;
  }
`

class TheGuy extends Component {
  render(){
    return(
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap'
      }}>
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
        <AutoBio as="section">
          <p>Testing</p>
        </AutoBio>
      </div>
    )
  }
}

export default TheGuy
