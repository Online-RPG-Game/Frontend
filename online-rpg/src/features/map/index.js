import React from 'react';
import { connect } from 'react-redux'
import {SPRITE_SIZE} from '../../config/constants';
import './styles.css'
import styled from 'styled-components'



const MapWrapper = styled.div`
position: relative;
width: 640px;
height: 320px;
  `

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
        width: SPRITE_SIZE
    }}/>
}

function MapRow(props){
    return <div className="row" 
    style={{
        height: SPRITE_SIZE}}>
        {props.tiles.map( tile => <MapTile tile={tile}/>)}
    </div>
}

function Map(props) {
    return (
        <MapWrapper>
           {
               props.tiles.map( row => <MapRow tiles={row} /> )
           }
        </MapWrapper>
    )
}

function mapStateToProps(state){
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map)