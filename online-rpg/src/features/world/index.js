import React, { useEffect } from 'react';
import Map from '../map/index';
import Player from '../player/index';
import { connect } from 'react-redux';
import axios from 'axios';
// import { two_d_array } from '../../data/maps/1';
import store from '../../config/store';

function World(props) {
  useEffect(() => {
    // Update the document title using the browser API

    const rooms = 'https://ls-rpg.herokuapp.com/api/adv/get_rooms';

    let two_d_array = [];

    axios.get(rooms).then((res) => {
      let arrayOfRooms = res.data.rooms;
      let temp_array = [];
      for (let i = 0; i < arrayOfRooms.length; i++) {
        if (
          [19, 39, 59, 79, 99, 119, 139, 159, 179, 199].includes(i)
        ) {
          temp_array.push(Number(arrayOfRooms[i]['description']));
          two_d_array.push(temp_array);
          temp_array = [];
        } else {
          temp_array.push(Number(arrayOfRooms[i]['description']));
        }
      }
      store.dispatch({
        type: 'ADD_TILES',
        payload: {
          two_d_array
        }
      });
    });
  }, []);
  return props.tiles ? (
    <div
      style={{
        position: 'relative',
        width: '640px',
        height: '320px'
        // margin: '100px auto',
        // borderRadius: '200px solid white'
      }}
    >
      <Map />
      <Player />
    </div>
  ) : (
    <div></div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.two_d_array
  };
}

export default connect(mapStateToProps)(World);
