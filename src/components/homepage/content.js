import React from "react"
import { Flex } from "../../styles/globalStyles"
import {
  ContentSection,
  ContentMain,
  ContentH2,
  ContentImage,
  ContentH3,
} from "../../styles/homeStyles"
import { useGlobalDispatchContext } from "../../context/globalContext"
import { HeydayA } from "../../styles/copiedStyles"

const brands = [
  { name: "brand 1", path: "brand1.svg" },
  { name: "brand 2", path: "brand2.svg" },
  { name: "brand 3", path: "brand3.svg" },
  { name: "brand 4", path: "brand4.svg" },
  { name: "brand 5", path: "brand5.svg" },
]

const Content = ({ onCursor }) => {
  const dispatch = useGlobalDispatchContext()

  return (
    <ContentSection>
      <Flex flexCenter padding="0 10%">
        <ContentMain
          onMouseEnter={() => dispatch({ type: "CURSOR_PINK", payload: true })}
          onMouseLeave={() => dispatch({ type: "CURSOR_PINK", payload: false })}
        >
          <ContentH2>
            Heyday's conversational commerce solution helps retailers easily
            connect with customers anywhere, leading to more sales and improved
            experiences.
          </ContentH2>
          <HeydayA
            href="https://www.heyday.ai/en/form/demo"
            target="_blank"
            onMouseEnter={() => onCursor("hover")}
            onMouseLeave={onCursor}
          >
            Rerquest demo
          </HeydayA>
        </ContentMain>
      </Flex>
      <Flex flexCenter>
        <ContentH3>
          The world’s leading brands engage their customers with Heyday
        </ContentH3>
      </Flex>
      <Flex flexCenter flexWrap margin="1rem 0">
        {brands.map(brand => (
          <ContentImage key={brand.name}>
            <img
              src={require(`../../assets/svg/${brand.path}`)}
              alt={brand.name}
            />
          </ContentImage>
        ))}
      </Flex>
    </ContentSection>
  )
}

export default Content
