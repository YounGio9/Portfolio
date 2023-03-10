import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faUserSecret,
  faList,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import '../styles/Banner.css'
import useWindowSize from '../hooks/useWindowSize'

function Banner({ menuOpen, setMenuOpen }) {
  const sections = ['A propos', 'Competences', 'Realisations', 'Contact']
  const icons = [faUser, faUserSecret, faList, faPhone]

  const { width } = useWindowSize()

  return (
    <div
      id={width >= 700 ? 'Banner' : ''}
      className={menuOpen ? 'Banner-open' : 'Banner-close'}
    >
      <div id="presentation">
        <p id={'first'}>Giovani</p>
        <p id={'second'}>de SOUZA</p>
        <h5>Developpeur Web</h5>
      </div>
      <div id={'menu'}>
        <ul>
          {sections.map((section, idx) => (
            <a
              key={section}
              onClick={() => setMenuOpen(false)}
              href={
                section === 'Realisations'
                  ? 'https://github.com/Youngio9'
                  : `#${section.replace(/\s/, '')}`
              }
            >
              <li className="section">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FontAwesomeIcon
                    icon={icons[idx]}
                    color="#61DAFB"
                    style={{ marginRight: 15 }}
                    fontSize={28}
                  />
                  {section}
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>

      <div id="reseaux">
        <FontAwesomeIcon icon={faGithub} fontSize={20} color={'grey'} />
        <FontAwesomeIcon icon={faInstagram} fontSize={20} color={'grey'} />
        <FontAwesomeIcon icon={faLinkedinIn} fontSize={20} color={'grey'} />
      </div>
    </div>
  )
}

export default Banner
