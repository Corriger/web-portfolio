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
        </Tabs>
      </div>
    )
  }
}
export default NavTabs
