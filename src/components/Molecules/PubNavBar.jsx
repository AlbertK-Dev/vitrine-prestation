import React from 'react'
import { PubNavLink } from '../Atoms/pub-app-bar'

const data = [
    {
        text: 'Nos solutions',
        type: 'nav-link',
        to: '#solution',        
    },
    {
        text: 'Découvrir Déessi',
        type: 'nav-link',
        to: '#discover',        
    },
    {
        text: 'Cas client',
        type: 'nav-link',
        to: '#client',        
    },
    {
        text: 'Carrière',
        type: 'nav-link',
        to: '#career',        
    },
    {
        text: 'Blog',
        type: 'nav-link',
        to: '#blog',        
    },
    {
        text: 'Contact',
        type: 'nav-link',
        to: '#contact',        
    },
    {
        text: 'Prise en main à distance',
        type: 'nav-link',
        to: '#handling',        
    },

]

export function PubNavBar() {
  return (
    <div className='d-flex p-2 gap-2'>
          {
              data.map((navlink) => 
                  <PubNavLink to={navlink.to} type={navlink.type}>
                      {navlink.text}
                  </PubNavLink>
              )
      }
          
    </div>
  )
}