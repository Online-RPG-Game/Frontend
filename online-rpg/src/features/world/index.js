import React from 'react'
import Map from '../map/index'
import Player from '../player/index'

import { two_d_array } from '../../data/maps/1';
import store from '../../config/store'

function World(props) {
    store.dispatch({type: 'ADD_TILES', payload: {
        two_d_array,
    }})
    return (
        <div
        style ={{
            position: 'relative',
            width: '640px',
            height: '320px',
            // margin: '100px auto',
            // borderRadius: '200px solid white'
        }}
        >
            
            <Map/>
            <Player />
        </div>
    )
}

export default World