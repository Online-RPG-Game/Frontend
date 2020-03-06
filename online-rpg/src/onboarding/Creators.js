import React from 'react'
import styled from 'styled-components'
import heart from '../features/tiles/heart.gif'
import runner from '../features/tiles/runner.gif'
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

export default function Creators(){
    const history = useHistory()
    return(
        <Gamesetter>
            <h2>This game was made with</h2>
            <img src={heart} alt="heart" style={{width:"10%"}}/>
            <h3>by Liam, Toby and Mogwai</h3>
            <p>(Joking aside: we take the Corona virus very seriously, and encourage everyone to take necessary precautions to stay healthy. Wash your hands with soap. If you can't find soap, please use an alcohol-based hand-sanitizer. If you're young, you may have read that stat that younger people have a higher chance of survival after contracting the virus. If that makes you feel like you can afford to be lax, well - step away from your selfishness for a second and think of the older, and more at-risk people who risk getting the virus from you. </p>
            <br/>
            <img src={runner} alt="heart" style={{width:"200px"}}/>
            <p>Run for your life</p>
            <p><Styler>Thank you, Lambda School, for the opportunity to stunt.</Styler></p>

            <StyledForm style={{height:'70px'}}>
            <button className='submit-button' type='submit' onClick={()=> {
                history.push('/game')
            }}>
              BACK TO GAME
            </button>
            </StyledForm>
        </Gamesetter>
    )
}