import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import walkSprite from './player_walk.png'
import handleMovement from './movement';
import { SPRITE_SIZE } from '../../config/constants';
import useEventListener from '@use-it/event-listener';

const MAX_STEP = 3;

const DIRECTION = {
  DOWN: 0,
  LEFT: SPRITE_SIZE * 1,
  RIGHT: SPRITE_SIZE * 2,
  UP: SPRITE_SIZE * 3
};

function Player(props) {
  const offset = { top: 0, left: 0 };
  const [facing, setFacing] = useState({
    current: DIRECTION.DOWN,
    previous: DIRECTION.DOWN
  });
  const [step, setStep] = useState(0);

  useEventListener('keydown', ({ code }) => {
    if (code.indexOf('Arrow') === -1) return;
    const direction =
      DIRECTION[code.replace('Arrow', '').toUpperCase()];
    setFacing((prevState) => ({
      current: direction,
      previous: prevState.current
    }));
  });

  useEffect(() => {
    if (facing.current === facing.previous) {
      setStep((prevState) =>
        prevState < MAX_STEP - 1 ? prevState + 1 : 0
      );
    } else {
      setStep(0);
    }
  }, [facing]);
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        background: `url(/player_walk.png) -${offset.left +
          step * SPRITE_SIZE}px -${facing.current}px`,
        // backgroundPosition: '0 96',
        width: SPRITE_SIZE,
        height: SPRITE_SIZE
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(handleMovement(Player));
