import { useState, useEffect } from "react"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1000,
    height: 800,
  })

  const onWindowSizeChange = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", onWindowSizeChange)

    return () => {
      window.removeEventListener("resize", onWindowSizeChange)
    }
  }, [])

  return windowSize
}

export default useWindowSize
