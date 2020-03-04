import React from 'react';
import border from '.././features/tiles/border.gif'
import styled from 'styled-components'

const Side = styled.div`
border: 10px solid transparent;
border-image: url(${border}) 30 stretch;
padding: 0 10px;
color: white;
margin-left: 20px;
`

export default function Sidebar(){
    return (
        <Side>
            <h2>Instructions</h2>
            <h3>You are Mario. As usual. You're a plumber. As usual.</h3>
            <p>Use your arrow keys to move up, down, left and right across the board.</p>

        </Side>
    )
}