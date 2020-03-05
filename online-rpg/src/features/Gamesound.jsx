import React from 'react'
import Sound from 'react-sound'
import gameMusic from './tiles/game_play.mp3'

export default function Gamesound() {
    return (
      <Sound
        url={gameMusic}
        playStatus={Sound.status.PLAYING}
        volume={30}
        autoLoad={true}
        loop={true}
      />
    );
  }