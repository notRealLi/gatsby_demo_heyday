import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.purple};
  color: ${props => props.theme.pink};
  overflow: hidden;
`
export const NavHeader = styled.div`
  position: relative;
  top: 4.8rem;

  h2 {
    color: ${props => props.theme.pink};
  }
`
export const NavClose = styled(motion.div)`
  button {
    border: none;
    background: none;
    outline: none;
    padding: 1.4rem;
    transform-origin: center;

    span {
      display: block;
      width: 2.3rem;
      height: 8px;
      background: ${props => props.theme.pink};
      margin: 8px;

      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      &:nth-child(2) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
`
export const NavList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  ul {
    padding: 0;

    li {
      list-style: none;
      font-size: 3.2rem;
      font-weight: 900;
      line-height: 6rem;
      height: 6rem;
      overflow: hidden;
      text-transform: uppercase;

      .link {
        display: flex;
        align-items: center;
        position: relative;
        color: ${props => props.theme.pink};

        .arrow {
          height: 4.75rem;
          margin-right: 8px;

          svg {
            width: 6.25rem;
          }
        }
      }
    }
  }
`
export const NavMedia = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 28%;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: -1;

  .cover {
    position: absolute;
    background: ${props => props.theme.purple};
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .media {
    position: absolute;
    background: #000;
    z-index: -1;
    margin: 0;
    height: 100%;
    width: 100%;

    video {
      height: 100%;
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 9rem 1rem 4rem 1rem;

  @media (max-width: 825px) and (max-height: 800px) {
    display: none;
  }

  p {
    color: ${props => props.theme.pink};
  }

  svg path {
    fill: ${props => props.theme.pink};
  }
`
