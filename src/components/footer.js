import React from "react"
import { Container } from "../styles/globalStyles"
import {
  FooterNav,
  FooterFlex,
  FooterContent,
  FooterSocial,
} from "./../styles/footerStyles"
import { Facebook, Instagram } from "../assets/svg/social-icons"
import { useGlobalDispatchContext } from "../context/globalContext"

const Footer = ({ onCursor }) => {
  const dispatch = useGlobalDispatchContext()
  return (
    <FooterNav
      onMouseEnter={() => dispatch({ type: "CURSOR_PINK", payload: true })}
      onMouseLeave={() => dispatch({ type: "CURSOR_PINK", payload: false })}
    >
      <Container>
        <FooterFlex>
          <FooterContent>
            <p>514.267.5984</p>
            <p>hey@heyday.ai</p>
          </FooterContent>
          <FooterContent flexNumber={2}>
            <p>1400-4200 boul. Saint-Laurent</p>
            <p>Montreal, Quebec, Canada</p>
          </FooterContent>
          <FooterSocial>
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
      </Container>
    </FooterNav>
  )
}

export default Footer
