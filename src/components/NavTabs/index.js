import React, { Component } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'
import TheGuy from './TheGuy.js'
import TheMethods from './TheMethods.js'
import TheCode from './TheCode.js'
import TheArt from './TheArt.js'
import TheMemes from './TheMemes.js'
import './tabs.css'
import './style.css'

class NavTabs extends Component{
  render(){
    return(
      <div>
        <Tabs>
          <TabList className="tabs">
            <Tab>The<br/>Guy</Tab>
            <Tab>The<br/>Methods</Tab>
            <Tab>The<br/>Code</Tab>
            <Tab>The<br/>Art</Tab>
            <Tab>The<br/>Memes</Tab>
          </TabList>
          <TabPanel>
            <TheGuy />
          </TabPanel>
          <TabPanel>
            <TheMethods />
          </TabPanel>
          <TabPanel>
            <TheCode />
          </TabPanel>
          <TabPanel>
            <TheArt />
          </TabPanel>
          <TabPanel>
            <TheMemes />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
export default NavTabs
