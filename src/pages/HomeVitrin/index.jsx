import React from 'react'
import './styles/style.scss'
import PubAppBar from '../../components/Organisms/PubAppBar'
import AppBar from '../../components/Organisms/AppBar'
import AppBarReactBootstrap from '../../components/Molecules/AppBarReactBootstrap'

function HomeVitrin() {
  return (
      <div>
          <div style={{height:'60px',backgroundColor:'blue'}}><PubAppBar/></div>
          <header style={{height:'100px'}}><AppBar/> </header>
          <section style={{backgroundColor:'blue'}}>info-section</section>
          <AppBarReactBootstrap/>
          <section>diff-section</section>
          <section>solutions-section</section>
          <section>join-us-section</section>
          <section>client-section</section>
          <section>interview-section</section>
          <section>last-actu-section</section>
          <section>diff-section-secondary</section>
          <footer>footer</footer>

      </div>
  )
}

export default HomeVitrin