import React from 'react'
import styled, { isStyledComponent } from 'styled-components'


const Section = styled.div`
  height: 100vh;
  background-color: darkgrey;
  scroll-snap-align: center;
`
const Shaders = () => {
  return (
    <Section>Shaders</Section>
  )
}

export default Shaders