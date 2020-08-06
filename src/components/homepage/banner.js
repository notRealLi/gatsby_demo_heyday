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
  let canvasRef = useRef(null)
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()

  const handleCanvas = () => {
    let canvas = canvasRef.current
    let ctx = canvas.getContext("2d")
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    let onCanvas = false
    let savedX, savedY
    let bounds = canvas.getBoundingClientRect()

    canvas.addEventListener("mouseenter", e => {
      onCanvas = true
      savedX = e.pageX - bounds.left
      savedX /= bounds.width
      savedX *= canvas.width
      savedY = e.pageY - bounds.top
      savedY /= bounds.height
      savedY *= canvas.height
    })
    canvas.addEventListener("mouseleave", e => {
      onCanvas = false
      savedX = e.pageX - bounds.left
      savedX /= bounds.width
      savedX *= canvas.width
      savedY = e.pageY - bounds.top
      savedY /= bounds.height
      savedY *= canvas.height
    })

    canvas.addEventListener("mousemove", e => {
      if (onCanvas) {
        ctx.globalCompositeOperation = "destination-out"
        let curX = e.pageX - bounds.left
        curX /= bounds.width
        curX *= canvas.width
        let curY = e.pageY - bounds.top
        curY /= bounds.height
        curY *= canvas.height
        ctx.lineJoin = "round"
        ctx.beginPath()
        // ctx.arc(curX, curY, 25, 0, 2 * Math.PI)
        ctx.moveTo(savedX, savedY)
        ctx.lineTo(curX, curY)
        ctx.closePath()
        ctx.lineWidth = 70
        ctx.stroke()
        savedX = curX
        savedY = curY
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
      <canvas
        width={`${size.width}px`}
        height={`${size.height}px`}
        ref={canvasRef}
      />
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
