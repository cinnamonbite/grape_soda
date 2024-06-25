import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import FirstGlance from './components/FirstGlance'
import CoolStuff from './components/CoolStuff'
import Shaders from './components/Shaders'
import FirstContact from './components/FirstContact'
import Author from './components/Author'
import Navbar from './components/Navbar'


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behaviour: smooth;
  overflow-y: auto;
  color: white;
  // background: url("./img/backg.jpeg");
  background-color: #2f2733;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {
  const [count, setCount] = useState(0)

  return (
      <Container>
          <Navbar />
          <FirstGlance />
          <Author />
          <CoolStuff />
          <Shaders />
          <FirstContact />
      </Container>
  )
}

export default App
