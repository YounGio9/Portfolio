import Write from "./Write"
import { useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import '../styles/Welcome.css'
import $ from 'jquery'
import { useState } from "react";
import Aos from "aos";
import CustomWrite from "./CustomWrite";

const Welcome = ({menuOpen, setMenuOpen}) => {

    const poste = ['Front End Developer', 'Full Stack developer', 'MERN Stack Developer']
    const [postIndex, setPostIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setPostIndex((postIndex + 1) % 3)
        }, 2800)
    }, [postIndex])
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
   
    return(
            <div id={'welcome'}>
                <button className="menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} color='#61DAFB' fontSize={28}/>
                </button> 
                <div id={'name'} style={{fontSize: 50, marginBottom: 50, textAlign: 'center'}}>
                    <CustomWrite text="Giovani" />
                    <CustomWrite text="de SOUZA" />
                </div>
                <p className={'name'}>{poste[postIndex]}</p>
                <button className="contact-button"><a style={{color: 'inherit'}} href="#Contact">Let's work together</a></button>

            </div>

    )
}

export default Welcome