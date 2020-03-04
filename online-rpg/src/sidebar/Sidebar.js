import React from 'react';
import runner from '.././features/tiles/runner.gif'
import styled from 'styled-components'

const Side = styled.div`
border: 10px solid transparent;
padding: 0 10px;
color: #000;
height: 100vh;
width: 20vw;
background-color: white;
line-height: 1.2em;
`

const List = styled.ul`
color: #2295c9;
line-height: 1.5em;
`

export default function Sidebar(){
    return (
        <Side>
            <h2>Instructions</h2>
            <h3>You have 30 seconds to locate the laboratory with the cure</h3>
            <p style={{color:'green'}}>Use your arrow keys to move up, down, left and right across the board.</p>
            <div>
                <img src={runner} alt="runner" style={{width:'100%'}}/>
                <List>
                    <li>Storyline</li>
                    <li>Creators</li>
                    <li style={{color:'red'}}>Quit</li>
                </List>
            </div>

        </Side>
    )
}