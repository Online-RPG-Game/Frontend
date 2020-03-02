import React from 'react'
import Map from '../map/index'
import Player from '../player/index'

import { tiles } from '../../data/maps/1';

function World(props) {
    return (
        <div
        style ={{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '50px auto',
        }}
        >
            <Map tiles={tiles}/>
            <Player />
        </div>
    )
}

export default World