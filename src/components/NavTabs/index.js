import React, { Component } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'
import TheCode from './TheCode.js'
import TheArts from './TheArts.js'
import TheGuy from './TheGuy.js'
import './tabs.css'

class NavTabs extends Component{
  render(){
    return(
      <div>
        <Tabs>
          <TabList className="tabs">
            <Tab>The Guy</Tab>
            <Tab>The Code</Tab>
            <Tab>The Arts</Tab>
          </TabList>
          <TabPanel><TheGuy/></TabPanel>
          <TabPanel><TheCode/></TabPanel>
          <TabPanel><TheArts/></TabPanel>
        </Tabs>
      </div>
    )
  }
}
export default NavTabs
