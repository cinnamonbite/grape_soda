import React from 'react'
import styled, { isStyledComponent } from 'styled-components'


const Section = styled.div`
  height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 15vw;
    margin-right: 15vw;
`
const Container = styled.div`
  height: 100vh;
    scroll-snap-align: center;
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
flex: 2;
flex-direction: colunmn;
justify-content: center;
gap: 20px;
`
const Title = styled.h1`
padding: 200px 0px 0px;
font-size: 70px;
color: #cb71d9;
`
const WhatWeDo = styled.div`
align-items: center;
padding: 30px 0px 0px;
`
const Subtitle = styled.h2`
color: #cb71d9;
`
const Desc = styled.p`
`
const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #87538f;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`

const Right = styled.div`
flex: 3;
position: relative;
`
const Img = styled.img`
width: 300px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
transform: rotate(12deg);
animation: animate 2s infinite ease alternate;

@keyframes animate {
to {
transform: translateY(20px) rotate(12deg);
}
}
`
// here to can be replaced with 100%
const Author = () => {
  return (
    <Section>

      <Container>

        <Left>
          <Title>Pure Imagination</Title>
          <WhatWeDo>
            <Subtitle>Grape Soda Playground</Subtitle>
          </WhatWeDo>
          <Desc>Surf the bubbles</Desc>
          <Button>Pop!</Button>
        </Left>

        <Right>
          {/* 3d model */}
          <Img src="./img/grape_can.png" />
        </Right>

      </Container>
    </Section>
  )
}

export default Author