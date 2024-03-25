import React from 'react'

export function PubNavLink({ to = '#nullpart', type = 'nav-link', children, className = 'nav-link' }) {
  
  if (type === 'contact') {
    return (
      <PubContactLink  className={`${className} contact`} to={to} >{children}</PubContactLink>
  )
    
  }
  return (
      <a className={className} href={to}>{children}</a>
  )
}

export function PubTelLink({ tel='', text, className='nav-link'}) {
    return (
        <a className={className} href={`tel:${tel.replace(' ','')}`}>{`${text}: ${tel}`}</a>
    )
}



  export function PubContactLink({ to = '#nullpart', className='btn nav-link' , children}) {
    return (
      <a className={className} href={to}>{children}</a>
  )
  }