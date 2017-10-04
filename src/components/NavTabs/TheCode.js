import React, { Component } from 'react'
import react from './react.svg'
import './style.css'

class TheCode extends Component{
  render(){
    return(
      <div className="TheCode">
        <header>
          <h2>Recent Work</h2>
          <section>
            <p>This site. It was made using React!</p>
            <img src={ react } alt="react-logo"/>
          </section>
        </header>
        <div>
          <section>
            <a href="http://friedagarciapark.com" target="_blank" rel="noopener noreferrer"><img class="clearfix" src="http://friedagarciapark.com/wp-content/themes/sage/assets/images/logo.png" alt=""/></a>
            <blockquote cite="http://friedagarciapark.com">
              The mission of The Friends of Frieda Garcia Park is to care for the park and to provide programming that welcomes children and residents of the rich, diverse backgrounds of Boston’s neighborhoods.
            </blockquote>
            <p>Originally a project divided among three people and redone for use with Wordpress's PHP library. The site uses <span>WordPress with the Sage framework</span> and is currently deployed on <span>DigitalOcean</span>.</p>
          </section>
          <section>
            <a href="http://americascores.48in48sites.org/" target="_blank" rel="noopener noreferrer"><img class="clearfix" src="http://americascores.48in48sites.org/uploads/2017/06/AS-logo-1.png" alt=""/></a>
            <blockquote cite="http://americascores.48in48sites.org/">
              America SCORES inspires urban youth to lead healthy lives, be engaged students, and have the confidence and character to make a difference in the world.
            </blockquote>
            <p>A collaborative effort with the fine designers and developers at <a href="http://www.sapientnitro.com/en-us.html">SapientNitro</a>. The site was developed during the summer of 2017 using <span>Wordpress</span> and its accompanying <span>Beaver Builder</span> plugin.</p>
          </section>
          <section>
            <a href="https://corriger.github.io/kyo-kusanagi" target="_blank" rel="noopener noreferrer"><img class="clearfix" src="https://i.imgur.com/BFuTry1.png" alt=""/></a>
            <blockquote cite="https://corriger.github.io/kyo-kusanagi">
              K'? Ash Crimson? Their flames ain't jack compared to mine!
            </blockquote>
            <p>A straight templated version of the Devil Hunter site. I make these things for a, uh... roleplaying site. Just another way of getting my creative juices flowing where they need to. Also uses <span>jQuery</span>.</p>
          </section>
          <section>
            <a href="http://corriger.github.io/devil-hunter" target="_blank" rel="noopener noreferrer"><img class="clearfix" src="http://i.imgur.com/9bDUpCs.png" alt=""/></a>
            <blockquote cite="http://corriger.github.io/devil-hunter">
              The hunter shall surpass all who came before him...
            </blockquote>
            <p>The site that kickstarted me into the path of a web developer. First instance of using <span>Javascript</span> - specifically the <span>jQuery</span> framework - to create the tab function up in the top right of the page. This was pre-Bootcamp, so it is far from responsive and not the most reuseable in terms of layout. But it, on top of my willingness to teach others that didn't know as much as me, got me into Resilient Coders in the first place.</p>
            <p>An improved, refactored version is on its way.</p>
          </section>
          <section>
            <a href="https://corriger.github.io/Rock-Paper-Scissors/" target="_blank" rel="noopener noreferrer"><img class="clearfix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/1200px-Rock-paper-scissors.svg.png" alt=""/></a>
            <blockquote cite="#">
              &#8230;
            </blockquote>
            <p>A simple Rock-Paper-Scissors game. You choose what you throw, the function runs to respond with a random selection of its own.</p>
          </section>
        </div>
        <aside>
          <strong>Planned Projects</strong>
          <ul>
            <li>The Legendary Devil Hunter -Redux-<br/>(jQuery; in progress)</li>
            <li>Devil Heatmap<br/>(React)</li>
            <li>Hymns of the World<br/>(Undecided)</li>
            <li>Variety Gun Simulation<br/>(jQuery)</li>
          </ul>
        </aside>
      </div>
    )
  }
}

export default TheCode
