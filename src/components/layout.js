import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"
import Header from "./header"
import CustomCursor from "./customCursor"
import Navigation from "./navigation"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.purple};
    overscroll-behavior: none;
    overflow-x: hidden;

    &.hidden {
      overflow-y: hidden;
    }
  }
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const defaultTheme = {
    background: "#ffb8c5",
    purple: "#453392",
    darkPurple: "#30186d",
    pink: "#ffb8c5",
    gray: "#b5aae84d",
    textPrimary: "#453392",
    canvas: "#ffffff",
  }

  const reverseTheme = {
    background: "#fff",
    purple: "#453392",
    pink: "#ffb8c5",
    textPrimary: "#ffb8c5",
  }

  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorStyle => {
    cursorStyle = (cursorStyles.includes(cursorStyle) && cursorStyle) || false

    dispatch({ type: "SWITCH_CURSOR", payload: cursorStyle })
  }

  const [navigationOpen, setNavigationOpen] = useState(false)

  useEffect(() => {
    if (navigationOpen) {
      document.body.classList.add("hidden")
    } else {
      document.body.classList.remove("hidden")
    }
  }, [navigationOpen])

  return (
    <ThemeProvider
      theme={currentTheme === "default" ? defaultTheme : reverseTheme}
    >
      <GlobalStyle />
      <CustomCursor navigationOpen={navigationOpen} />
      <Header
        onCursor={onCursor}
        navigationOpen={navigationOpen}
        setNavigationOpen={setNavigationOpen}
      />
      <Navigation
        onCursor={onCursor}
        navigationOpen={navigationOpen}
        setNavigationOpen={setNavigationOpen}
      />
      <main>{children}</main>
      <Footer onCursor={onCursor} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
