import React, { Component } from 'react'
import me from './me.png'
import './style.css'
import 'font-awesome/css/font-awesome.min.css'

class TheGuy extends Component{
  bodyText = "Born in Boston, MA, Roger is one of the oldest of the family's American-born Trinidadians. He grew up with books, paper and pencil, and had been drawing since he was able. He was not introduced to the world of web programming and development until the age of 10 through a one-day run of HTML usage - 7 years later and 7 years since, he was reintroducted and returned to it in full-force. Originally aspiring to be an artist or writer, he found that such jobs depended far too heavily on astounding talent that he at the time did not have; at that revelation, he noticed his other marketable skill was that of web development, something previously done purely as a hobby."

  render(){
    return(
      <div className="TheGuy">
        <img src={ me } alt="das me"/>
        <h2>This is The Guy.<br />His name is Roger.</h2>
        <p>{ this.bodyText }</p>
      </div>
    )
  }
}

export default TheGuy
