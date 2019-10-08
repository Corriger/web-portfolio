import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.png'

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`
const BackImage = styled.img`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: calc(100% - 15px);
  opacity: .7;
`
const Text = styled.h1`
  width: 100%;
  color: rgba(255,215,0,1);
  font-size: 2em;
  text-align: center;
  text-shadow: 0px 0px 4px rgba(0,0,0,1), 5px 0px 5px rgba(176,196,222,1), -5px 0px 5px rgba(176,196,222,1);
  @media only screen and (max-width: 768px){
    letter-spacing: .20em;
  }
`

class HeadBanner extends Component {
  render(){
    return(
      <div>
        <Header>
          <BackImage src={ logo }/>
          <Text>Professional Playground</Text>
        </Header>
      </div>
    )
  }
}

export default HeadBanner
