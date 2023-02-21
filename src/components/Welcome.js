import Write from "./Write"
import { useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import '../styles/Welcome.css'
import $ from 'jquery'

const Welcome = ({menuOpen, setMenuOpen}) => {
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    useEffect(() => {
        $('.name').slideUp(5)
        $('.name').slideDown(2000)

        $('.contact-button').mouseenter(() => {
            $('.contact-button').animate({
                width: window.matchMedia("(min-width: 700px)").matches ? "14%" : '52%',
                fontSize: "1.5em",
                borderWidth: "2px",
                backgroundColor: 'white'
            }, 1500)
        })
        $('.contact-button').mouseleave(() => {
            $('.contact-button').animate({
                width: window.matchMedia("(min-width: 700px)").matches ? "10%" : '45%',
                borderWidth: '1px'
            }, 1000)
        })


    }, [])
    return(
            <div id={'welcome'}>
                <button className="menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} color='#08fdd8' fontSize={28}/>
                </button> 
                <div id={'name'}>
                    <Write text='Hi,' color={'white'} size={80} /><br/>
                    <Write text="I'm Giovani," color={'white'} size={80} /><br/>
                    <Write text="web developer" color={'white'} size={80} /><br/>
                </div>
                <p className={'name'}>Front End Developer</p>
                <button className="contact-button">Contact me!</button>

            </div>

    )
}

export default Welcome