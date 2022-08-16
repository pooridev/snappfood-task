import { useLayoutEffect, useState } from 'react'

type Sizes = {
  width: number
  height: number
}

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<Sizes>({
    width: 1140,
    height: 0,
  })

  useLayoutEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

export default useWindowSize
