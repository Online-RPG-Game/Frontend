import React from 'react';
import { connect } from 'react-redux'
// import walkSprite from './player_walk.png'
import handleMovement from './movement'
function Player(props) {
    const offset = {top:0, left:0}
    return (
        <div
        style = {{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            background: `url(/player_walk.png) -${offset.left}px -${offset.top}px`,
            // backgroundPosition: '0 96',
            width: '32px',
            height: '32px'
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