import React from 'react'
import styled, { isStyledComponent } from 'styled-components'


const Section = styled.div`
  height: 100vh;
  background-color: teal;
    scroll-snap-align: center;
`
const CoolStuff = () => {
  return (
    <Section>CoolStuff</Section>
  )
}

export default CoolStuff