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
  display: block;
  border-bottom: 2px solid rgba(255,215,0,1);
  width: 100%;
  height: 45%;
  object-fit: cover;
  @media only screen and (max-width: 992px){
    display: none;
  }
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
  @media only screen and (max-width: 992px){
    display: block;
    padding: 0;
  }
  @media only screen and (max-width: 768px){
    display: none;
  }
`
const Affiliates = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 100%;
  border-right: none;
  @media only screen and (max-width: 480px){
    flex-flow: column;
    align-items: center;
  }
`
const Company = styled.img`
  height: 30px;
  width: 30px;
  object-fit: contain;
  object-position: center;
`
const AutoBio = styled(ContactInfo)`
  background: rgba(0,0,0,.5);
  padding: 30px;
  width: 75%;
  border-right: none;
  color: rgba(255,255,255,1);
  overflow-y: auto;
`
const Para = styled.p`
  display: block;
  padding: 15px;
  font-size: 1em;
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
            <a style={ { marginBottom: '15px' } } href="mailto:rsmoraldo2@gmail.com"><FontAwesomeIcon icon={ ['fas','at'] } size="2x" />
            <ContactType>rsmoraldo2@gmail.com</ContactType>
            </a>
            <a style={ { marginBottom: '15px' } } href="tel:+16176997450"><FontAwesomeIcon icon={ ['fas','phone']  } size="2x" />
            <ContactType>(617) 699-7450</ContactType>
            </a>
            <a style={ { marginBottom: '15px' } } href="https://github.com/Corriger" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ ['fab','github']  } size="2x" />
            <ContactType>Corriger (Roger M)</ContactType>
            </a>
            <a style={ { marginBottom: '15px' } } href="https://www.linkedin.com/in/roger-moraldo-00a646122/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ ['fab','linkedin']  } size="2x" />
            <ContactType>Roger Moraldo</ContactType>
            </a>
            <a style={ { marginBottom: '15px' } } href={ resume } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ ['fas','file']  } size="2x" />
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
        <Para>I'm one of the eldest of the first generation Trinidadians in my family, born and primarily raised in Boston MA. While I don't have an aversion to physical activity I have always found more comfort in the written word and the blank canvas of paper and pen(cil), creating shape and scripture since I was able.</Para>
        <Para>My introduction to the wonderful world of the Web came when I was about as young as 10 or 12, and I found myself revisiting it during a leisurely dive into roleplaying when I wanted to portray my characters in a more cohesive light during my junior year, exercising my penchant for design and diction. Seven years since I was finally allowed an opportunity to train under and work with Resilient Coders to become the professionally-driven developer that I am now, with a heavier focus on the aesthetic appeal and accessibility of user-side interactions.</Para>
        <Para>My foray into software development stems from my love of speculative fiction, a genre that always struck me as the best conduit for experimentation with wordplay, concepts and philosophies. To me, software development encompasses the same malleability that can keep my mind sharp even into my more age-addled years, and I don't see myself straying from it anytime soon.</Para>
        </AutoBio>
      </div>
    )
  }
}

export default TheGuy
