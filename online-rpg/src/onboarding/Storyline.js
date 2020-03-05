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
width: 1000px;
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
            <p>We're not going to sugar-coat it. When the Corona virus hit, it hit <Styler>hard.</Styler> The virus' R(0) factor alarmed scientists, statisticians and VC-type investors. A number of false starts were made in the direction of a cure, but the virus kept marching on...</p>
            <p>Some people said the worst casualty of the outbreak was the economy. Others were offended by this, yelling that capitalism had made us lose sight of our basic humanity. While the fight raged on, more people quietly succumbed to the sweet embrace of death.</p>
            <p>Soon, the world could only be spoken of in terms of 'who's died from the virus' and 'who is a carrier of the virus'.</p>
            <p>That's where you come in.</p>
            <p>Being a <Styler>paranoid Doomsday kook</Styler>, you'd stashed yourself in a bunker ten years ago after reading an old newspaper about the Mayan calendar. Since then the outside world basically went on without you. For some reason you decided to take a break and take a glimpse of what was left of the world. That's when you discovered you were right - you smug bastard! - and the world was truly screwed. Who's laughing now?</p>
            <p>But there's no rule against kooks being altruistic, so now you're on a one-man mission to break into a secret lab that purportedly holds a cure to the virus, but only sells to the super-mega-hyper-multi-rich.</p>
            <p style={{color:'yellow'}}>The world bids you good fortune, kooky hero.</p>
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