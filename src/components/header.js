import React, { useEffect } from "react"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"
import { Link } from "gatsby"
import LogoSVG from "../assets/svg/logo.svg"
import { useGlobalStateContext } from "../context/globalContext"

const Header = ({ onCursor, navigationOpen, setNavigationOpen }) => {
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.1, 0, 1] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo onMouseEnter={() => onCursor("hover")} onMouseLeave={onCursor}>
            <Link to="/">
              <img src={LogoSVG} alt="" />
              <span></span>
            </Link>
          </Logo>
          <Menu
            onClick={() => setNavigationOpen(!navigationOpen)}
            onMouseEnter={() => onCursor("hover")}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
