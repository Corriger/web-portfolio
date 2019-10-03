import React, { Component } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'
import TheCode from './TheCode.js'
import TheArts from './TheArts.js'
import './tabs.css'

class NavTabs extends Component{
  render(){
    return(
      <div>
        <Tabs>
          <TabList className="tabs">
            <Tab>The<br/>Code</Tab>
            <Tab>The<br/>Arts</Tab>
          </TabList>
          <TabPanel><TheCode/></TabPanel>
          <TabPanel><TheArts/></TabPanel>
        </Tabs>
      </div>
    )
  }
}
export default NavTabs
