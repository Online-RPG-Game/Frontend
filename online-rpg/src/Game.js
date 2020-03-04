import React from 'react';
import World from './features/world/index'
import Sidebar from './sidebar/Sidebar'
import Heading from './sidebar/Heading'
import Interact from './sidebar/interact'
import Countdown from 'react-countdown-now'
import styled from 'styled-components'

const Main = styled.div`
display: flex;
`

const GamePlay = styled.div`
display: flex;
flex-direction: column;
`
const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`



function Game() {
  return (
    <Main style={{color:'white'}}>
    <Sidebar />
    <Header>
    <Heading/>
    <h2>Time left: <Countdown date={Date.now() + 120000}/></h2>
    <GamePlay>
    <World />
    <Interact/>
    </GamePlay>
    </Header>
    </Main>
  )
}

export default Game;
