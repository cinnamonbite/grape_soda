import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
width: 100vw;
display: flex;
      justify-content: space-between;
    padding: 20px 0px;
`
const Links = styled.div`
margin-left: 15vw;
display: flex;
  text-align: center;
  gap: 20px;
`
const Logo = styled.img`
height: 7vh;
`
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
cursor: pointer;
`
const ListItem = styled.li`
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
const Icons = styled.div`
margin-right: 15vw;
 align-items: center;
 display: flex;
gap: 20px;
`
const Icon = styled.img`
height: 5vh;
cursor: pointer;
`
const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                <Logo src="./img/grape_soda.png" />
                <List>
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
                </Links>
               <Icons>
                <Icon src="./img/git.png"/>
                <Button>Hire now</Button>
               </Icons>
            </Container>
        </Section>
    )
}

export default Navbar