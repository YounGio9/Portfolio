import { useEffect} from "react";
import React from "react";
import '../styles/write.css'
function Write({text, size, color}) {
 // const [isHovering, setIsHovering] = useState(false)
    const handleMouseEnter = (e) => {

          e.target.style.color = '#08fdd8'
          e.target.style.transition = '0.5s'
        if(e.target.innerText !== ' ' )
          e.target.style.display = 'inline-block'
          e.target.className = 'bouncing'

  }
    const handleMouseLeave = (e) => {
      setTimeout(() => {
        e.target.style.color = color
        e.target.style.transition = '0s'
          e.target.className = ''
      }, 10)
    }
    useEffect(() => {
        let spans = document.querySelectorAll('span')
        spans.forEach(span => {
            span.style.color = color
            span.style.transition = '4s'
        })
    })

    return (
        text.split('')
            .map((letter, idx)=> <span  key={idx} onMouseLeave={handleMouseLeave}
                                  onMouseEnter={handleMouseEnter}
                                  style={{
                                    fontSize: window.matchMedia("(min-width: 700px)").matches ? size : 37,
                                    lineHeight: window.matchMedia("(max-width: 700px)").matches ? '50px': '90px',
                                    color: "black",
                                    fontWeight: "bold",
                                    fontFamily: 'sans-serif'
            }}
            >{letter}</span>)
    )
}

export default Write