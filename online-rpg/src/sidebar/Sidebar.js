import React from 'react';
import runner from '.././features/tiles/runner.gif'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Side = styled.div`
padding: 0 10px;
color: black;
height: 100vh;
width: 30vw;
background-color: white;
line-height: 1.2em;
`

const List = styled.ul`
color: inherit;
text-decoration: none;
line-height: 1.5em;
`

export default function Sidebar(){
    return (
        <Side>
            <h2>Instructions</h2>
            <h3>You have 2 minutes to locate the laboratory with the cure</h3>
            <p style={{color:'red'}}>Use your arrow keys to move up, down, left and right across the board.</p>
            <div>
                <img src={runner} alt="runner" style={{width:'100%'}}/>
                <List>
                    <NavLink to="/storyline" style={{color:'#28929c', textDecoration:'none'}}>Storyline</NavLink>
                    <br/>
                    <NavLink to="/creators" style={{color:'#28929c', textDecoration:'none'}}>Creators</NavLink>
                    <br/>
                    <NavLink to="/main" style={{color:'red', textDecoration:'none'}}>Quit</NavLink>
                </List>
            </div>

        </Side>
    )
}