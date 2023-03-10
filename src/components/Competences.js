import Write from "./Write";
import React,{ useEffect } from "react";
import '../styles/Competences.css'
import Skillshower from "./Skillshower";
import Aos from 'aos'
import "aos/dist/aos.css";
import { totalSkills } from "../datas/totalSkills"

const Competences = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])

    return(
        <div id={'Competences'}>

        <div style={{ marginTop: 65 }}>
        <Write text="Mes competences" color="white" size={60} />
      </div>
      <p className="Ma-description">
        Si il y a un language que je maitrise parfaitement c'est le JavaScript. Je suis capable d'écrire n'importe quel programme en JavaScript et je maitrise les fonctions avancées de ce language. Comme autres de mes compétences je peux citer : 
      </p>
      <div className="total-skills">
        {
        totalSkills.map((skill, idx) => (
            <Skillshower {...skill} index={idx % 2} key={idx}/>
        )) 
      }
      </div>
        </div>


    )
}

export default Competences