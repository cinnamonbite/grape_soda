import React from 'react'
import styled, { isStyledComponent } from 'styled-components'


const Section = styled.div`
  height: 100vh;
  background-color: indigo;
    scroll-snap-align: center;
`
const FirstContact = () => {
  return (
    <Section>FirstContact</Section>
  )
}

export default FirstContact