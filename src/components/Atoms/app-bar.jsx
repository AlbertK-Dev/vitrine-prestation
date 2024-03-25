import React from 'react'

export  function AppBarNavLink({to = '', id = 2, children }) {
    return (
      <div  className='app-bar-nav-link'>
            <a  href={to.replace(' ', '')} id={id} >
          {children}
          <span className='app-bar-nav-link-chevron-down'/>

      </a>
      </div>
      
  )
}

export function AppBarNavMenuItem({ text = '', to = '', index='none' }) {
    let className = 'app-bar-nav-menu-link '
    if (index === 'first') {
        className = `${className} first`   
    }else if (index === 'last') {
        className = `${className} last`
    } else {
        className = 'app-bar-nav-menu-link'
    }
    return (
        <a className={className} href={to.replace(' ', '')} style={{display:'inline-block'}}>
            {text}
        </a>
    )
}


