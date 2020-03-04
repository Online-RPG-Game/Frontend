import React, { useState } from 'react';
import { connect } from 'react-redux'
// import walkSprite from './player_walk.png'
import handleMovement from './movement'
import {SPRITE_SIZE} from '../../config/constants'
import useEventListener from '@use-it/event-listener'

const DIRECTION = {
    DOWN: 0,
    LEFT: SPRITE_SIZE * 1,
    RIGHT: SPRITE_SIZE * 2,
    UP: SPRITE_SIZE * 3
}

function Player(props) {
    const offset = {top:0, left:0}
    const [facing, setFacing] = useState(DIRECTION.DOWN)

    useEventListener("keydown", ({ code })=> {
        if(code.indexOf("Arrow")==-1) return
        const direction = DIRECTION[code.replace("Arrow", "").toUpperCase()]
        setFacing(direction)

    })
    return (
        <div
        style = {{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            background: `url(/player_walk.png) -${offset.left}px -${facing}px`,
            // backgroundPosition: '0 96',
            width: SPRITE_SIZE,
            height:SPRITE_SIZE,
        }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));