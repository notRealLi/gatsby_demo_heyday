import React, { useState, useEffect } from "react"
import { Cursor } from "../styles/globalStyles"
import { useGlobalStateContext } from "../context/globalContext"

const CustomCursor = ({ navigationOpen }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 100,
    y: 72,
  })

  const { cursorStyle, cursorPink } = useGlobalStateContext()

  const onMouseMove = e => {
    setMousePosition({
      x: e.pageX,
      y: e.pageY,
    })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <Cursor
      className={`${cursorStyle ? cursorStyle : ""} ${
        navigationOpen || cursorPink ? "cursor-pink" : ""
      }`}
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    />
  )
}

export default CustomCursor
