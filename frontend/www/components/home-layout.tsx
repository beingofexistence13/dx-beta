import React from 'react'
import Activitybar from './activitybar'
import LayoutSwitcher from './layout-switcher'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Settings from './settings'

const HomeLayout = () => {
  return (
    <div>
      <Activitybar />
      <LayoutSwitcher />
      <Navbar />
      <Settings />
      <Sidebar />
    </div>
  )
}

export default HomeLayout