import React, { useState, useEffect } from "react"
import {
  TestiSection,
  TestiMainLeft,
  TestiMainRight,
  TestiH1,
  TestiTextBubble,
} from "../../styles/homeStyles"
import { useGlobalDispatchContext } from "../../context/globalContext"

const testis = [
  {
    testi: `“We are super proud of our live chat 😍 More than half of our
    conversations with customers are handled by our bot. Thanks Heyday
    for the amazing support!”`,
    logo: "testi_logo1.jpeg",
    name: "Camille Ract",
    title: "Customer Service Leader, DECATHLON Singapore",
    alt: "DECATHLON",
  },
  {
    testi: `“ We knew the next evolution of our multi-channel customer experience needed to include online chat and Heyday’s AI platform was a perfect fit. ”`,
    logo: "testi_logo2.jpeg",
    name: "Jeremy Cramer",
    title: "IT Director at Orville’s Home Appliances USA",
    alt: "Orville’s Home Appliances",
  },
  {
    testi: `“On top of giving us an innovative competitive advantage that our consumers love, Heyday definitely elevated our customer experience.”`,
    logo: "testi_logo3.jpeg",
    name: "Arthur Sylvestre",
    title: "Senior Digital Manager at DANONE",
    alt: "DANONE",
  },
]

const Testimonial = () => {
  const dispatch = useGlobalDispatchContext()
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const changeProfile = setInterval(() => {
      setIdx(idx => (idx + 1) % 3)
    }, 4000)

    return () => clearInterval(changeProfile)
  }, [idx])

  return (
    <TestiSection
      onMouseEnter={() => dispatch({ type: "CURSOR_PINK", payload: true })}
      onMouseLeave={() => dispatch({ type: "CURSOR_PINK", payload: false })}
    >
      <TestiMainLeft>
        <TestiH1>
          What they say about <br />
          Heyday
        </TestiH1>
      </TestiMainLeft>
      <TestiMainRight>
        <TestiTextBubble>
          <p>{testis[idx].testi}</p>
          <div className="profile">
            <div className="logo">
              <img
                src={require(`../../assets/jpeg/${testis[idx].logo}`)}
                alt={testis[idx].alt}
              />
            </div>
            <div className="person">
              <div className="name">{testis[idx].name}</div>
              <div className="title">{testis[idx].title}</div>
            </div>
          </div>
        </TestiTextBubble>
      </TestiMainRight>
    </TestiSection>
  )
}

export default Testimonial
