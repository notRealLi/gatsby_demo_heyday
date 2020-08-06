import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledBanner = styled.div`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  position: relative;
  /* margin-bottom: 296px; */

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    /* test */
    width: 100%;
  }
`

export const BackgroundImage = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  img {
    max-width: 68vw;

    /* @media (max-width: 1600px) {
      max-width: 60vw;
    } */
  }
`
export const Video = styled.div`
  width: 100%;
  height: 100%;

  video {
    object-fit: cover;
  }
`
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  /* test */
  width: 100%;
`
export const BannerTitle = styled(motion.h1)`
  position: absolute;
  color: ${props => props.theme.textPrimary};
  pointer-events: none;
  left: 0;
  bottom: -4vw;
  width: 100%;

  @media (max-width: 645px) {
    bottom: -5vw;
  }
`
export const Headline = styled(motion.span)`
  display: block;
  font-size: 17vw;
  font-weight: 900;
  line-height: 0.8;

  /* @media (max-width: 1125px) {
    font-size: 22vw;
  }

  @media (max-width: 645px) {
    font-size: 24vw;
  } */
`
export const SmallHeadline = styled(motion.span)`
  display: block;
  font-size: 3vw;
  font-weight: 900;
  line-height: 0.8;

  /* @media (max-width: 1125px) {
    font-size: 8vw;
  }
*/
  @media (max-width: 645px) {
    font-size: 5vw;
  }
`

// Content
export const ContentSection = styled.div`
  background: #fff;
  padding-top: 15.5rem;
  padding-bottom: 5rem;
  height: fit-content;
  width: 100%;

  @media (max-width: 1024px) {
    padding-top: 12.5rem;
  }
`
export const ContentMain = styled.div`
  text-align: center;
  background: ${props => props.theme.textPrimary};
  padding: 2rem 8rem;
  border-radius: 25px;
  height: 60%;
  /* max-height: 300px; */
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 400px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 250px) {
    padding: 2rem 0.5rem;
  }
`
export const ContentH1 = styled.h1`
  font-size: 4rem;
  line-height: 1.4;
  font-weight: 400;
  color: #fff;
  margin: 0 0 1rem 0;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 850px) {
    font-size: 2.4rem;
  }
`
export const ContentH2 = styled.h2`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 300;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 850px) {
    font-size: 1.2rem;
  }
`
export const ContentH3 = styled.h3`
  text-align: center;
  display: block;
  margin-top: 5rem;
  margin-bottom: 0;
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 400;
  color: ${props => props.theme.pink};

  @media (max-width: 750px) {
    font-size: 1.2rem;
  }
`

export const ContentImage = styled.div`
  margin: 1.5rem 2rem;
  min-width: 100px;
`
// testimonial
export const TestiSection = styled.div`
  background: ${props => props.theme.darkPurple};
  width: 100%;
  padding: 4rem 0;
  display: flex;
  padding: 7rem 0;

  @media (max-width: 955px) {
    flex-direction: column;
  }
`
export const TestiMainLeft = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  padding-right: 5rem;
  width: 50%;
  height: 100%;

  @media (max-width: 955px) {
    width: 100%;
    padding: 0;
    justify-content: center;
    text-align: center;
  }
`
export const TestiH1 = styled.h1`
  font-size: 4rem;
  line-height: 1.4;
  font-weight: 400;
  color: #fff;
  margin: 0 0 1rem 0;

  /* @media (max-width: 918px) {
    font-size: 3.5rem;
  } */

  @media (max-width: 850px) {
    font-size: 2.4rem;
  }
`
export const TestiMainRight = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;

  @media (max-width: 955px) {
    width: 100%;
    justify-content: center;
  }

  /*
  @media (max-width: 400px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 250px) {
    padding: 2rem 0.5rem;
  } */
`
export const TestiTextBubble = styled.div`
  box-sizing: border-box;
  background: ${props => props.theme.purple};
  color: #fff;
  width: 68%;
  padding: 1rem 3rem;
  border-radius: 25px 25px 25px 0;
  display: flex;
  flex-direction: column;
  height: 300px;

  @media (max-width: 1190px) {
    width: 85%;
    padding: 1rem 2rem;
  }

  @media (max-width: 465px) {
    height: fit-content;
  }

  p {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 2rem;
  }

  .logo {
    width: 15%;

    @media (max-width: 500px) {
      display: none;
    }
    img {
      border-radius: 100px;
      width: 100%;
    }
  }

  .profile {
    margin-top: 1rem;
    display: flex;

    .person {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 1rem;

      @media (max-width: 500px) {
        margin-left: 0;
      }

      .name {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`
// filler
export const FillerSection = styled.div`
  background: ${props => props.theme.pink};
  padding-top: 5.5rem;
  padding-bottom: 5rem;
  /* height: 20rem; */
  width: 100%;
  scroll-behavior: none;

  @media (max-width: 1024px) {
    padding-top: 12.5rem;
  }
`
export const FillerMain = styled.div`
  text-align: center;
  padding: 0 20rem 2rem 20rem;
  overflow: hidden;

  @media (max-width: 1224px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 400px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 250px) {
    padding: 2rem 0.5rem;
  }
`

// about
export const AboutSection = styled.div`
  background: ${props => props.theme.purple};
  padding-bottom: 6rem;
`
export const AboutFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 525px) {
    flex-direction: column;
  }
`
export const AboutMain = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  text-align: center;

  @media (max-width: 525px) {
    justify-content: center;
  }

  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6;
  }
`
export const AboutMailSection = styled.div`
  border: 1px dashed ${props => props.theme.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;

  .title {
    display: flex;
    align-items: center;

    img {
      margin-top: 0.6rem;
      margin-right: 1rem;
      width: 2.5rem;

      @media (max-width: 725px) {
        margin-top: 0.4rem;
        width: 2.3rem;
      }
    }

    h2 {
      font-size: 2.3rem;
      font-weight: 400;

      @media (max-width: 725px) {
        font-size: 1.8rem;
      }
    }
  }

  #email {
    margin-top: 1rem;
    border: none;
    background: transparent;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.gray};
    text-align: center;
    caret-color: #fff;

    &::placeholder {
      text-align: center;
      font-size: 1.2rem;
      color: ${props => props.theme.gray};
      margin-bottom: 0.5rem;
    }

    &:focus {
      outline: none;
    }
  }

  #submit {
    margin-top: 1rem;

    &:focus {
      outline: none;
    }
  }
`
export const AboutExplore = styled.div`
  margin-top: 2rem;
  color: #fff;

  @media (max-width: 560px) {
    margin-left: 1rem;
  }
`

// accordion
export const AccordionHeader = styled.div`
  width: 100%;
  color: #fff;
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0.5rem 0;
`
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 0.5rem;

  span {
    width: 16px;
    height: 4px;
    background: #fff;
    transition: 0.1 ease-in-out;
  }
`
export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 2.5rem;

  span {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #fff;
    font-weight: 300;
  }
`
