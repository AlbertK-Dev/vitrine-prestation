import React from 'react'
import { PubNavBar } from '../Molecules/PubNavBar'
import { PubTelLink } from '../Atoms/pub-app-bar'



function PubAppBar() {
  return (
    <div className='d-flex gap-0 column-gap-6 '>
      <div className='d-flex gap-0 column-gap-6 p-2 '>
        <PubTelLink text={'Tel'} tel='+237 67 97 78 52' />
        <PubTelLink text={'Support'} tel='+237 67 97 78 52' />
      </div>
      <PubNavBar />
    </div>
  )
}



export default PubAppBar