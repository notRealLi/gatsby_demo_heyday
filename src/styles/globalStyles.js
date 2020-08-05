import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      margin: 0;
      padding: 0;
      max-width: 100%;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.flexCenter &&
    css`
      justify-content: center;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.flexWrap &&
    css`
      flex-wrap: wrap;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
  ${props =>
    props.margin &&
    css`
      padding: ${props => props.margin};
    `};
  ${props =>
    props.padding &&
    css`
      padding: ${props => props.padding};
    `};
`

export const Cursor = styled.div`
  position: absolute;
  left: 100px;
  top: 100px;
  background: ${props => props.theme.purple};
  width: 32px;
  height: 32px;
  border-radius: 100%;
  z-index: 999;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  pointer-events: none;
  will-change: width, height, border;
  transition-property: width, height, border;
  /* pointer-events: none; */

  &.cursor-pink {
    background: ${props => props.theme.pink};

    &.hover {
      border: 4px solid ${props => props.theme.pink};
    }
  }

  &.hover {
    background: transparent;
    width: 3.5rem;
    height: 3.5rem;
    border: 4px solid ${props => props.theme.textPrimary};
  }
`
