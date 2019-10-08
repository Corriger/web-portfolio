import React, { Component } from 'react'
import styled from 'styled-components'
import face from './img/me.933bd7b3.png'
import fontawesome from './svg'

const Img = styled.img`
  display: "block";
  width: "20%";
  margin: "20px auto";
  border-radius: "50%";
  box-shadow: "0 0 15px rgba(176,196,222,1)";
`

class TheGuy extends Component {
  render(){
    return(
      <div>
        <Img src={ face }/>
        <ContactInfo>
          <i class="fas fa-at"></i>
          <i class="fas fa-at"></i>
          <i class="fas fa-at"></i>
        </ContactInfo>
      </div>
    )
  }

export default TheGuy
