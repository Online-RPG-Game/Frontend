import React from 'react';
import {SPRITE_SIZE} from '../../config/constants';
import './styles.css'

function getTileSprite(type){
    switch(type){
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
        case 7:
            return 'hospital'
        default:
            return type
    }
}

function MapTile(props) {
    return <div 
    className={`tile ${getTileSprite(props.tile)}`} 
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
        margin: '0',
        padding: '0'
    }}
    />
}

function MapRow(props){
    return <div className="row" style={{margin: '0', padding:'0'}}>
        {props.tiles.map( tile => <MapTile tile={tile}/>)}
    </div>
}

function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                backgroundColor: '#36271a',
                borderImage: 'url(../tiles/tree.png)'
            }}
        >
           {
               props.tiles.map( row => <MapRow tiles={row} /> )
           }
        </div>
    )
}

export default Map