import React from 'react'

export  function AppBarNavLink({to = '', id = 2,onMouseHover, onMouseLeave, children }) {
    return (
      <div onMouseLeave={onMouseLeave} onMouseOver={onMouseHover} className='app-bar-nav-link'>
            <a  href={to.replace(' ', '')} id={id} >
          {children}
          <span className='app-bar-nav-link-chevron-down'/>

      </a>
      </div>
      
  )
}

export function AppBarNavMenuItem({text='', to=''}) {
    return (
        <a className='app-bar-nav-menu-link ' href={to.replace(' ', '')} style={{display:'inline-block'}}>
            {text}
        </a>
    )
}


