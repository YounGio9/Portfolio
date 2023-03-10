import React from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  })

  React.useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleWindowSize()

    window.addEventListener('resize', handleWindowSize)

    //return () => window.removeEventListener('resize', handleWindowSize)
  }, [])

  return windowSize
}

export default useWindowSize
