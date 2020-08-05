import React from "react"
import { Container } from "../../styles/globalStyles"
import {
  AboutSection,
  AboutMain,
  AboutExplore,
  AboutFlex,
} from "../../styles/homeStyles"
import Accordion from "./accordion"
import { useGlobalDispatchContext } from "../../context/globalContext"
import { AboutMailSection } from "./../../styles/homeStyles"
import { HeydayInput } from "../../styles/copiedStyles"

const links = [
  {
    category: "Solutions",
    items: ["E-commerce", "Marketing", "Support", "Enterprise"],
  },
  {
    category: "Product",
    items: ["Agent interface", "Features", "Integrations"],
  },
  {
    category: "Resources",
    items: ["Blog", "Tips", "eBooks", "Compare"],
  },
  {
    category: "Company",
    items: ["Careers", "News", "Contact"],
  },
]

const About = ({ onCursor }) => {
  const dispatch = useGlobalDispatchContext()

  return (
    <AboutSection
      onMouseEnter={() => dispatch({ type: "CURSOR_PINK", payload: true })}
      onMouseLeave={() => dispatch({ type: "CURSOR_PINK", payload: false })}
    >
      <Container>
        <AboutFlex>
          <AboutMain>
            <AboutMailSection>
              <div className="title">
                <img src={require("../../assets/svg/mail.svg")} alt="heyday" />
                <h2>Stay in the loop</h2>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Work email*"
                required
                id="email"
                onMouseEnter={() => onCursor("hover")}
                onMouseLeave={onCursor}
              />
              <HeydayInput
                id="submit"
                type="submit"
                value="Sign me up"
                onMouseEnter={() => onCursor("hover")}
                onMouseLeave={onCursor}
              />
            </AboutMailSection>
          </AboutMain>
          <AboutExplore>
            <h3>Explore</h3>
            <Accordion links={links} onCursor={onCursor} />
          </AboutExplore>
        </AboutFlex>
      </Container>
    </AboutSection>
  )
}

export default About
