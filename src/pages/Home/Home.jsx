import React from 'react'
import './Home.css'
import Duyurular from '../../components/Duyurular/Duyurular.jsx'
import Hakkımızda from '../../components/Hakkımızda/Hakkımızda.jsx'
import Egitimler from '../../components/Egitimler/Egitimler.jsx'
import Yarismalar from '../../components/Yarismalar/Yarismalar.jsx'
import Etkinlikler from '../../components/Etkinlikler/Etkinlikler.jsx'

const Home = () => {
  return (
    <main className="main-content">
      <section id="duyurular" className="section">
        <Duyurular/>
      </section>
      <section id="hakkimizda" className="section">
        <Hakkımızda/>
      </section>
      <section id="egitimler" className="section">
        <Egitimler/>
      </section>
      <section id="yarismalar" className="section">
        <Yarismalar/>
      </section>
      <section id="etkinlikler" className="section">
        <Etkinlikler/>
      </section>
    </main>
  )
}

export default Home
