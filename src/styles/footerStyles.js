import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled.div`
  height: 8rem;
  padding-bottom: 2rem;
  background: ${props => props.theme.purple};
`
export const FooterFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 825px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 525px) {
    align-items: center;
  }
`
export const FooterContent = styled(motion.div)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 0.5rem;
  flex: 1;

  ${props =>
    props.flexNumber &&
    css`
      flex: ${props => props.flexNumber};
    `}

  @media (max-width: 420px) {
    font-size: 1.2rem;
  }

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`
export const FooterSocial = styled(motion.div)`
  display: flex;
  position: relative;
  a {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.5rem;
    display: block;
    position: relative;
    &:nth-child(1) {
      @media (max-width: 825px) {
        padding-left: 0;
      }
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
