import Banner from "./Banner";
import React, {useState} from "react";
import '../styles/App.css';
import Welcome from "./Welcome";
import Competences from "./Competences";
import Apropos from "./Apropos";

function App() {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
      <div style={{
        overflow: menuOpen ? 'hidden' : 'scroll',
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }} >
        <Banner menuOpen={menuOpen}/>
          <div style={{
              position: 'absolute',
              top: 0,
              left: window.matchMedia("(min-width: 700px)").matches ? '9vw' : '0',
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              transform: `translateX(${menuOpen ? 200 : 0}px)`,
              background: '#242937',
              transition: '0.8s'
          }}>
              <div className='noBannerStyle' >
                  <Welcome menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
              </div>

              <div className="noBannerStyle" >
                <Apropos />
              </div>
          </div>


      </div>

  );
}

export default App;
