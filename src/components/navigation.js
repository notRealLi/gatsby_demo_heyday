import React, { useState } from "react"
import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  NavClose,
  NavList,
  NavFooter,
  NavMedia,
} from "../styles/navigationStyles"
import { motion, AnimatePresence } from "framer-motion"
import {
  FooterContent,
  FooterSocial,
  FooterFlex,
} from "./../styles/footerStyles"
import { Facebook, Instagram } from "../assets/svg/social-icons"

const routes = [
  {
    title: "We'd like to help",
    path: "https://www.facebook.com/1702749793374590/videos/634385523794407",
    media: "video1.mp4",
  },
  {
    title: "Heyday x Decathlon",
    path: "https://www.heyday.ai/en/industry/sports",
    media: "video2.mp4",
  },
  {
    title: "DX3 2019",
    path:
      "https://capitalideasmedia.com/video/capital-ideas-tv-at-dx3-steve-desjarlais-ceo-heyday-ai/",
    media: "video3.mp4",
  },
  {
    title: "COVID-19: Que faire?",
    path: "https://www.facebook.com/1702749793374590/videos/229279221786252",
    media: "video4.mp4",
  },
]

const Navigation = ({ onCursor, navigationOpen, setNavigationOpen }) => {
  const [showMedia, setShowMedia] = useState({
    media: "video.mp4",
    hidden: true,
  })

  return (
    <AnimatePresence>
      {navigationOpen && (
        <Nav
          initial={{ x: "-100%" }}
          exit={{ x: "-100%" }}
          animate={{
            x: navigationOpen ? 0 : "-100%",
          }}
          transition={{
            duration: 0.6,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
        >
          <Container>
            <NavHeader>
              <Flex spaceBetween noHeight>
                <a
                  href="https://www.heyday.ai/en/resources/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => onCursor("hover")}
                  onMouseLeave={onCursor}
                >
                  <h2>What's New</h2>
                </a>
                <NavClose
                  onMouseEnter={() => onCursor("hover")}
                  onMouseLeave={onCursor}
                  animate={{
                    display: showMedia.hidden ? "block" : "none",
                  }}
                >
                  <button onClick={() => setNavigationOpen(!navigationOpen)}>
                    <span></span>
                    <span></span>
                  </button>
                </NavClose>
              </Flex>
            </NavHeader>
            <NavList>
              <ul>
                {routes.map((route, idx) => (
                  <motion.li
                    key={idx}
                    onHoverStart={() => {
                      setShowMedia({
                        hidden: false,
                        media: route.media,
                      })
                    }}
                    onHoverEnd={() => {
                      setShowMedia({
                        hidden: true,
                        media: "video3.mp4",
                      })
                    }}
                    onMouseEnter={() => onCursor("hover")}
                    onMouseLeave={onCursor}
                  >
                    <a
                      href={route.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        initial={{ x: -100 }}
                        whileHover={{
                          x: -40,
                          transition: {
                            duration: 0.4,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          },
                        }}
                        className="link"
                      >
                        <span className="arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57"
                          >
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="#ffb8c5"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        {route.title}
                      </motion.div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </NavList>
            <NavMedia>
              <motion.div
                className="cover"
                animate={{
                  width: showMedia.hidden ? "100%" : 0,
                }}
              ></motion.div>
              {showMedia.hidden ? null : (
                <div className="media">
                  <motion.video
                    src={require(`../assets/video/${showMedia.media}`)}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.2,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      },
                    }}
                    autoPlay
                    loop
                    muted
                    type="video/mp4"
                  ></motion.video>
                </div>
              )}
            </NavMedia>

            <NavFooter>
              <FooterFlex>
                <FooterContent>
                  <p>hey@heyday.ai</p>
                </FooterContent>
                <FooterContent
                  flexNumber={2}
                  animate={{
                    display: showMedia.hidden ? "flex" : "none",
                  }}
                >
                  <p>H2W 2R2, Montreal, QC</p>
                </FooterContent>
                <FooterSocial
                  animate={{
                    display: showMedia.hidden ? "flex" : "none",
                  }}
                >
                  <a
                    href="https://www.facebook.com/heydayai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => onCursor("hover")}
                    onMouseLeave={onCursor}
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://www.instagram.com/heydayai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => onCursor("hover")}
                    onMouseLeave={onCursor}
                  >
                    <Instagram />
                  </a>
                </FooterSocial>
              </FooterFlex>
            </NavFooter>
          </Container>
        </Nav>
      )}
    </AnimatePresence>
  )
}

export default Navigation
