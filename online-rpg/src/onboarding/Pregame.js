import React from 'react'
import styled from 'styled-components'
import skull from '../features/tiles/skullman.gif'
import StyledForm from './styles';
import { useHistory } from 'react-router-dom'

const Gamesetter = styled.div`
display: flex;
color: #e5e6dc;
padding-top: 20px;
justify-content: center;
align-items: center;
line-height: 2.5em;
text-align: center;
flex-direction: column;
width: 90vw;
margin: 0 auto;
`
const Styler = styled.span`
color: red;
`

export default function Pregame(){
    const history = useHistory()
    return(
        <Gamesetter>
            <h1>You are the <Styler>last</Styler> <br/>healthy person on earth</h1>
            <img src={skull} alt="man-sad" style={{width:"10%"}}/>
            <p>You have to find a cure for the Corona virus to save all of humanity. <Styler>And you only have two minutes to do that!</Styler></p>
            <p>Use your <Styler>Arrow keys</Styler> (UP, DOWN, LEFT and RIGHT) to move about.</p>
            <StyledForm style={{height:'70px'}}>
            <button className='submit-button' type='submit' onClick={()=> {
                history.push('/game')
            }}>
              PLAY GAME!
            </button>
            </StyledForm>
        </Gamesetter>
    )
}