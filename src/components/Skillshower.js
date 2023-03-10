import React,{useEffect, useState} from 'react'
import '../styles/Skillshower.css'
import Aos from 'aos';
import "aos/dist/aos.css";


function Skillshower({percentage, text, index}) {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  
  const position = ['right', 'left']
  
  return (
    <div className='skill-wrapper'  data-aos={`fade-up-${position[index]}`} >
    <p style={{
      display: 'flex'
    }}>
    <span style={{flexGrow: 1}}>{text}</span>
    <span>{`${percentage}%`}</span>
    </p>
    <div className='skill-shower'>
        <div className="percentage" style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: '#61dafb'
        }}>
        

        </div>
    </div>
    </div>
  )
}

export default Skillshower