import React from 'react'
import { PubNavLink } from '../Atoms/pub-app-bar'

import { pubNavData } from "../../datas/pubBar";

export function PubNavBar() {
  return (
    <div className='pub-nav-bar'>
          {
              pubNavData.map((navlink) => 
                  <PubNavLink to={navlink.to} type={navlink.type} className={'pub-nav-link'}>
                      {navlink.text}
                  </PubNavLink>
              )
      }
          
    </div>
  )
}