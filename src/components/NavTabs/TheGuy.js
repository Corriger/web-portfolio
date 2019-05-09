import React, { Component } from 'react'
import me from './me.png'
import './style.css'
import resume from './resume.pdf'
import github from './github.png'

class TheGuy extends Component{
  bodyText = "Born in Boston, MA, Roger is one of the oldest of the family's American-born Trinidadians. He grew up with books, paper and pencil, and had been drawing since he was able. He was not introduced to the world of web programming and development until the age of 10 through a one-day run of HTML usage - 7 years later and 7 years since, he was reintroducted and returned to it in full-force. Originally aspiring to be an artist or writer, he found that such jobs depended far too heavily on astounding talent that he at the time did not have; at that revelation, he noticed his other marketable skill was that of web development, something previously done purely as a hobby."

  render(){
    return(
      <div className="TheGuy">
        <img src={ me } alt="das me"/>
          <h3 style={{
            fontSize: '2.5em',
            fontWeight: 'bolder'
          }}>(617) 699-7450</h3>
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%'
          }}>
          <li>
            <a href="mailto:http://rsmoraldo2@gmail.com">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/768px-TK_email_icon.svg.png" alt=""/>
            </a>
          </li>
          <li>
            <a href="https://github.com/Corriger" target="_blank" rel="noopener noreferrer">
              <img src={ github } alt=""/>
            </a>
          </li>
        </ul>
        <p>{ this.bodyText }</p>
        <a style={{
          textShadow: '0px 0px 15px #FFFFFF',
          textDecoration: 'none',
          fontWeight: 'bolder',
          fontSize: '2em',
          color: '#FF0000',
          margin: '30px auto'
        }} href={ resume }>My Resume</a>
      </div>
    )
  }
}

export default TheGuy
