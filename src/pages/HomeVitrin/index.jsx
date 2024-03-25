import React from 'react'
import './styles/style.scss'
import PubAppBar from '../../components/Organisms/PubAppBar'
import AppBar from '../../components/Organisms/AppBar'

function HomeVitrin() {
  return (
      <div style={{minHeight: '100vh', display:'flex', flexDirection: 'column'}}>
          <div style={{height:'55px'}}><PubAppBar/></div>
      <header style={{ height: '95px' }}><AppBar /> </header>
      <div style={{ backgroundColor: 'black', flex: 1, display: 'flex', justifyContent:'center', alignItems:'center', color:'white'}}>
        other
      </div>
      
          {/* <section style={{backgroundColor:'#005ca9'}}>info-section</section>
          <section>diff-section</section>
          <section>solutions-section</section>
          <section>join-us-section</section>
          <section>client-section</section>
          <section>interview-section</section>
          <section>last-actu-section</section>
          <section>diff-section-secondary</section>
          <footer>footer</footer> */}

      </div>
  )
}

export default HomeVitrin