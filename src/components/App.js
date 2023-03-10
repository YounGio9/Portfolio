import Banner from './Banner'
import React, { useState } from 'react'
import '../styles/App.css'
import Welcome from './Welcome'
import Competences from './Competences'
import Apropos from './Apropos'
import Contact from './Contact'
import useWindowSize from '../hooks/useWindowSize'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const { width } = useWindowSize()

  useState(() => {
    console.log(width)
  }, [width])

  return (
    <div
      style={{
        overflow: menuOpen ? 'hidden' : 'scroll',
        position: menuOpen ? 'relative' : '',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Banner menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: width >= 750 ? '9vw' : '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          transform: `translateX(${menuOpen ? 200 : 0}px)`,
          background: '#242937',
          transition: '0.8s',
        }}
      >
        <div className="noBannerStyle">
          <Welcome menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        <div className="noBannerStyle">
          <Apropos />
        </div>

        <div className="noBannerStyle">
          <Competences />
        </div>

        <div className="noBannerStyle">
          <Contact />
        </div>

        <footer
          style={{
            width: '100%',
            background: '#61DAFB',
            color: 'black',
            marginTop: 150,
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>
            <strong>©</strong> 2023, Giovani de SOUZA.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
