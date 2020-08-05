import React, { useEffect, useRef } from "react"
import {
  StyledBanner,
  Canvas,
  BannerTitle,
  Headline,
  BackgroundImage,
  SmallHeadline,
} from "../../styles/homeStyles"
import useWindowSize from "./../../hooks/useWindowSize"
import { useGlobalStateContext } from "../../context/globalContext"
import backgroundImage from "../../assets/png/background1.png"

const Banner = () => {
  let canvas = useRef(null)
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()

  const handleCanvas = () => {
    let bottomCanvas = canvas.current
    let topCanvas = bottomCanvas.cloneNode()
    let bottomCanvasCtx = bottomCanvas.getContext("2d")
    let topCanvasCtx = topCanvas.getContext("2d")
    bottomCanvasCtx.globalCompositeOperation = "source-over"
    bottomCanvasCtx.fillStyle = "#ffffff"
    bottomCanvasCtx.fillRect(0, 0, size.width, size.height)
    let onCanvas = false
    let savedX, savedY
    bottomCanvas.addEventListener("mouseover", e => {
      onCanvas = true
      savedX = e.pageX - bottomCanvas.offsetLeft
      savedY = e.pageY - bottomCanvas.offsetTop
    })
    bottomCanvas.addEventListener("mouseup", e => {
      onCanvas = false
      savedX = e.pageX - bottomCanvas.offsetLeft
      savedY = e.pageY - bottomCanvas.offsetTop
    })
    bottomCanvas.addEventListener("mousemove", e => {
      if (onCanvas) {
        topCanvasCtx.globalCompositeOperation = "source-over"
        bottomCanvasCtx.globalCompositeOperation = "destination-out"
        let curX = e.pageX - bottomCanvas.offsetLeft
        let curY = e.pageY - bottomCanvas.offsetTop
        topCanvasCtx.lineJoin = "round"
        topCanvasCtx.moveTo(savedX, savedY)
        topCanvasCtx.lineTo(curX, curY)
        topCanvasCtx.closePath()
        topCanvasCtx.lineWidth = 100
        topCanvasCtx.stroke()
        savedX = curX
        savedY = curY
        bottomCanvasCtx.drawImage(topCanvas, 0, 0)
      }
    })
  }

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  useEffect(() => {
    handleCanvas()
  }, [currentTheme])

  return (
    <StyledBanner>
      <BackgroundImage>
        <img src={backgroundImage} alt="AI app" />
      </BackgroundImage>
      <Canvas width={size.width} height={size.height} ref={canvas} />
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <SmallHeadline variants={child}>
          What's on your client's mind?
        </SmallHeadline>
        <Headline variants={child}>START</Headline>
        <Headline variants={child}>DIGGIN'</Headline>
      </BannerTitle>
    </StyledBanner>
  )
}

export default Banner
