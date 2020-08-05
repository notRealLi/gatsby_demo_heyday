import React from "react"
import {
  FillerSection,
  ContentImage,
  FillerMain,
  ContentH2,
  TestiH1,
} from "../../styles/homeStyles"
import { Flex } from "../../styles/globalStyles"
import { HeydayA2 } from "../../styles/copiedStyles"

const Filler = ({ onCursor }) => {
  return (
    <FillerSection>
      <Flex flexCenter>
        <ContentImage>
          <img src={require("../../assets/svg/chart.svg")} alt="heyday" />
        </ContentImage>
      </Flex>

      <FillerMain>
        <TestiH1>So, ready to chat?</TestiH1>
        <ContentH2>
          Get a turnkey solution for your AI chatbot needs. Fully loaded, fast
          deployment & flexible integrations to fit your retail needs.
        </ContentH2>

        <HeydayA2
          href="https://www.heyday.ai/en/form/demo-free-trial"
          target="_blank"
          onMouseEnter={() => onCursor("hover")}
          onMouseLeave={onCursor}
        >
          Start talking
        </HeydayA2>
      </FillerMain>
    </FillerSection>
  )
}

export default Filler
