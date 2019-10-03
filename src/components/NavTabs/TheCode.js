import React, { Component } from 'react'
import styled from 'styled-components'

const SubSec = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  @media only screen and (max-width: 768px){
    width: 100%;
  }
`
// const WIP = styled(SubSec)`
//   width: 25%;
//   @media only screen and (max-width: 768px){
//     display: none;
//   }
// `
const SubArticle = styled.article`
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 0 0 30px;
  border-bottom: 2px solid rgba(116,69,137,1);
`
const SiteLogo = styled.img`
  display: block;
  margin: 7.5px auto;
  object-fit: contain;
  object-position: center;
  height: 90px;
  width: 100%;
  @media only screen and (max-width: 768px){
    margin: 0 auto;
  }
`
const SiteQuote = styled.blockquote`
  padding: 0;
  width: calc(80% - 10px);
  font-style: italic;
  color: rgba(255,255,255,1);
`

let projects = [
  {
    href: "http://www.thelennyzakimfund.org/",
    logo: "http://www.thelennyzakimfund.org/wp-content/themes/sage/dist/images/lzf-logo.svg",
    quote: "Deeply committed to social justice and to the fundamental rights and dignity of all people, The Lenny Zakim Fund changes the course of people’s lives."
  },
  {
    href: "https://www.benjaminzander.org/",
    logo: "https://www.benjaminzander.org/wp-content/themes/sage/dist/images/logo.png",
    quote: "Forging transformative pathways to human growth through the musical teachings of Benjamin Zander."
  },
  {
    href: "http://friedagarciapark.com/",
    logo: "http://friedagarciapark.com/wp-content/themes/sage/assets/images/logo.png",
    quote: "The mission of The Friends of Frieda Garcia Park is to care for the park and to provide programming that welcomes children and residents of the rich, diverse backgrounds of Boston’s neighborhoods."
  },
  {
    href: "http://americascores.48in48sites.org/",
    logo: "http://americascores.48in48sites.org/uploads/2017/06/AS-logo-1.png",
    quote: "America SCORES inspires urban youth to lead healthy lives, be engaged students, and have the confidence and character to make a difference in the world."
  },
  {
    href: "https://corriger.github.io/kyo-kusanagi",
    logo: "https://i.imgur.com/BFuTry1.png",
    quote: "K'? Ash Crimson? Their flames ain't jack compared to mine!"
  },
  {
    href: "http://corriger.github.io/devil-hunter",
    logo: "http://i.imgur.com/9bDUpCs.png",
    quote: "The hunter shall surpass all who came before him..."
  }
]
// let workInProjects = [
//   {
//     href: "",
//     name: ""
//   }
// ]

class TheCode extends Component {
  render(){
    return(
      <div className="TheCode">
        <div>
          <SubSec>
          { projects.map(
            (project, i) => {
            return <SubArticle>
              <a href={ projects[i].href }>
                <SiteLogo src={ projects[i].logo }/>
              </a>
              <SiteQuote>{ projects[i].quote }</SiteQuote>
            </SubArticle>
          }
          )
          }
          </SubSec>
        </div>
      </div>
    )
  }
}

export default TheCode
