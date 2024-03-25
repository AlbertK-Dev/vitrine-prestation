import React from 'react'
import AppBarNav from '../Molecules/AppBarNav'
import logo from '../../assets/logo.png'

function AppBar() {
  return (
      <div className='app-bar'>
          <div className='app-bar-content'>
              <a href='#home' className='app-bar-logo navbar-brand' style={{padding:'5px'}}>
              <img src={logo} alt="logo" style={{objectFit:'cover', height:'90%'}}  />
          </a>

          <AppBarNav/>
          </div>
          
    </div>
  )
}

export default AppBar