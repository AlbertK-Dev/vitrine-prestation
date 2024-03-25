import React from 'react'
import { PubNavBar } from '../Molecules/PubNavBar'
import { PubTelLink } from '../Atoms/pub-app-bar'



function PubAppBar() {
  return (
    <div className='pub-app-bar'>
      <div className='pub-app-bar-tel '>
        <PubTelLink className='pub-tel-link' text={'Tel'} tel='+237 67 97 78 52' />
        <PubTelLink className='pub-tel-link sup' text={'Support'} tel='+237 67 97 78 52' />
      </div>
      <PubNavBar />
    </div>
  )
}



export default PubAppBar