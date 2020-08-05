import React, { useState, useEffect } from "react"
import {
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"
import { motion } from "framer-motion"

const Accordion = ({ links, onCursor }) => {
  const [expanded, setExpanded] = useState(2)
  const [hover, setHover] = useState(-1)

  useEffect(() => {})

  return (
    <>
      {links.map((link, idx) => (
        <div className="accordion-main" key={idx}>
          <AccordionHeader
            onMouseEnter={() => {
              onCursor("hover")
              setHover(idx)
            }}
            onMouseLeave={() => {
              onCursor()
              setHover(-1)
            }}
            onClick={() => setExpanded(idx)}
          >
            <AccordionIcon>
              <motion.span
                animate={{
                  rotate: idx === expanded || idx === hover ? 0 : 45,
                  x: 3,
                }}
                transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
              ></motion.span>
              <motion.span
                animate={{
                  rotate: idx === expanded || idx === hover ? 0 : -45,
                  x: -3,
                }}
                transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
              ></motion.span>
            </AccordionIcon>
            {link.category}
          </AccordionHeader>
          <AccordionContent
            animate={{ height: idx === expanded ? "100%" : "0" }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            {link.items.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </AccordionContent>
        </div>
      ))}
    </>
  )
}

export default Accordion
