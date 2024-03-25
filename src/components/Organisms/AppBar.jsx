import React from 'react'
import AppBarNav from '../Molecules/AppBarNav'

function AppBar() {
  return (
      <div className='app-bar'>
          <div className='app-bar-content'>
              <a href='#home' className='app-bar-logo navbar-brand'>
              LOGO
          </a>

          <AppBarNav/>
          </div>
          
    </div>
  )
}

export default AppBar