import React, { Component } from 'react'
import styled from 'styled-components'
import './style.css'
import works from './data.js'


const SubSec = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
`
const SubArticle = styled.article`
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 0 0 30px;
  width: 70%;
  border-bottom: 2px solid rgba(116,69,137,1);
`
const SiteLogo = styled.img`
  display: block;
  margin: 7.5px auto;
  object-fit: contain;
  object-position: center;
  height: 90px;
  @media only screen and (max-width: 768px){
    margin: 0 auto;
  }
`
const SiteQuote = styled.blockquote`
  padding: 0;
  width: calc(70% - 30px);
  font-style: italic;
  margin: 0 0 15px;
  color: white;
`

class TheCode extends Component{
  render(){
    return(
      <div className="TheCode">
        <div>
          <SubSec>
            <SubArticle>
            <a href="#"><SiteLogo/></a>
              <SiteQuote>{ works }</SiteQuote>
            </SubArticle>
          </SubSec>
        </div>
      </div>
    )
  }
}

export default TheCode
