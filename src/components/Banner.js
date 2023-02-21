import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../styles/Banner.css'

function Banner({menuOpen}) {
    const sections = ['A propos', 'Mes competences', 'Realisations', 'Contact']
    return (
        <div id={window.matchMedia('(min-width: 650px)').matches ? 'Banner' : ''} className={menuOpen ? 'Banner-open' : 'Banner-close'}>
            <div id='presentation'>
                <p id={'first'}>Giovani</p>
                <p id={'second'}>de SOUZA</p>
                <h5>Developpeur Web</h5>
            </div>
            <div id={'menu'}>
                <ul>
                    {sections.map(section =>
                       <a key={section} href={`#${section.replace(/\s/, '')}`}><li className='section'>{section}</li></a> )
                    }
                </ul>
            </div>

            <div id='reseaux'>
                <FontAwesomeIcon icon={ faGithub } fontSize={20} color={'grey'}/>
                <FontAwesomeIcon icon={ faInstagram } fontSize={20} color={'grey'}/>
                <FontAwesomeIcon icon={ faLinkedinIn }   fontSize={20} color={'grey'} />
            </div>

        </div>
    )
}

export default Banner