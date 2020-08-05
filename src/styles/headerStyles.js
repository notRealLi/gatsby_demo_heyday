import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 0;
  left: 0;
  right: 0;
  top: 72px;
  z-index: 99;
`
export const Logo = styled.div`
  img {
    width: 10rem;
    height: 3rem;
  }

  span {
    /* display: block;
    width: 1rem;
    height: 1rem; */
  }
`

export const Menu = styled.div`
  button {
    padding: 20px;
    background: none;
    border: none;
    outline: none;
    transform-origin: center;

    span {
      width: 2.3rem;
      height: 0.5rem;
      display: block;
      margin: 8px;
      background: ${props => props.theme.textPrimary};
    }
  }
`
