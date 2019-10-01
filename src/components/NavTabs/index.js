import React, { Component } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'
import TheCode from './TheCode.js'
import './tabs.css'
import './style.css'

class NavTabs extends Component{
  render(){
    return(
      <div>
        <Tabs>
          <TabList className="tabs">
            <Tab>The<br/>Code</Tab>
          </TabList>
          <TabPanel><TheCode/></TabPanel>
        </Tabs>
      </div>
    )
  }
}
export default NavTabs
