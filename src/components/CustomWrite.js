import React from 'react'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function CustomWrite(props) {
  useEffect(() => {
    Aos.init({
      duration: 2300,
    })
  }, [])

  const position = ['up', 'down']

  return (
    <div className="custom-write">
      {props.text.split``.map((letter, idx) =>
        letter === ' ' ? (
          <span key={'not'}> </span>
        ) : (
          <span
            style={{ display: 'inline-block' }}
            key={`${idx}`}
            //data-aos-delay={`${delay + idx * 100}`}
            data-aos={`slide-${position[idx % 2]}`}
          >
            {letter}
          </span>
        )
      )}
    </div>
  )
}

export default CustomWrite
