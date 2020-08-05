import React from "react"
import Layout from "../components/layout"
import Banner from "../components/homepage/banner"
import Content from "../components/homepage/content"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"
import Filler from "../components/homepage/filler"
import About from "../components/homepage/about"
import Testimonial from "../components/homepage/testimonial"

const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorStyle => {
    cursorStyle = (cursorStyles.includes(cursorStyle) && cursorStyle) || false

    dispatch({ type: "SWITCH_CURSOR", payload: cursorStyle })
  }

  return (
    <Layout>
      <Banner />
      <Content onCursor={onCursor} />
      <Testimonial />
      <Filler onCursor={onCursor} />
      <About onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
