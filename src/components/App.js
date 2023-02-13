import Banner from "./Banner";
import React, {useState} from "react";
import '../styles/App.css';
import Welcome from "./Welcome";
import Competences from "./Competences";

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    const aph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const deverouille = () => {
        for(const i of aph) {
            for(const j of aph) {
               for(const k of aph) {
                  for(const l of aph) 
                  {
                      var sor = () => <span>{'A' + i + j + k + l + '@'}</span>
                      sor()
                  }
               }
            }
         }

    }

    const noBannerStyle = {
        width: window.matchMedia("(min-width: 700px)").matches ? '91vw' : '100vw',
        height: "100vh",
        backgroundColor: '#1d1d1d'
    }
  return (
      <React.Fragment >
        <Banner menuOpen={menuOpen}/>
          <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              transform: `translateX(${menuOpen ? 200 : 0}px)`,
              transition: '0.8s'
          }}>
              <div style={noBannerStyle} >
                  <Welcome menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
              </div>
              <div style={noBannerStyle}>
                {deverouille}
                  <Competences />
              </div>
          </div>


      </React.Fragment>

  );
}

export default App;
