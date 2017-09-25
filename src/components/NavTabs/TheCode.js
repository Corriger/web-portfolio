import React, { Component } from 'react'
import react from './react.svg'
import './style.css'

class TheCode extends Component{
  render(){
    return(
      <div className="TheCode">
        <header>
          <h2>Recent Works</h2>
          <section>
            <p>This site. It was made using React!</p>
            <img src={ react } alt="react-logo"/>
          </section>
        </header>
        <div>
          <section>
            <a href="http://friedagarciapark.com" target="_blank" rel="noopener noreferrer"><img src="http://friedagarciapark.com/wp-content/themes/sage/assets/images/logo.png" alt=""/></a>
            <blockquote cite="http://friedagarciapark.com">
              The mission of The Friends of Frieda Garcia Park is to care for the park and to provide programming that welcomes children and residents of the rich, diverse backgrounds of Boston’s neighborhoods.
            </blockquote>
            <p>Originally a project divided among three people and redone for use with Wordpress's PHP library.</p>
          </section>
          <section>
            <a href="http://corriger.github.io/devil-hunter" target="_blank" rel="noopener noreferrer"><img src="http://i.imgur.com/9bDUpCs.png" alt=""/></a>
            <blockquote cite="http://corriger.github.io/devil-hunter">
              The hunter shall surpass all who came before him...
            </blockquote>
            <p>Originally a project divided among three people and redone for use with Wordpress's PHP library.</p>
          </section>
          <section>
            <a href="https://corriger.github.io/Rock-Paper-Scissors/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/1200px-Rock-paper-scissors.svg.png" alt=""/></a>
            <p>Originally a project divided among three people and redone for use with Wordpress's PHP library.</p>
          </section>
        </div>
        <aside>
          <strong>Planned Projects</strong>
          <ul>
            <li>The Legendary Devil Hunter Redux<br/>(jQuery; in progress)</li>
            <li>Devil Heatmap<br/>(React)</li>
            <li>Hymns of the World<br/>(React)</li>
            <li>Variety Gun Simulation<br/>(jQuery)</li>
          </ul>
        </aside>
      </div>
    )
  }
}

export default TheCode
