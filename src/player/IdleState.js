import React from 'react';

export default class IdleState {
  handlePlay(player) {
    const stateId = player.state.currentState;
    const inputId = player.state.inputs.PLAY;
    const currentState = player.state.transitions[stateId][inputId];

    player.setState({
      currentState: currentState,
    });
  }

  handleNext(player) {
    let songId = player.state.currentSong;
    const maxSongs = player.state.songs.length - 1;
    const currentSong = (songId === maxSongs) ? songId : ++songId;

    player.setState({
      currentSong: currentSong,
    });
  }

  handlePrevious(player) {
    let songId = player.state.currentSong;
    const currentSong = (songId === 0) ? songId : --songId;

    player.setState({
      currentSong: currentSong,
    });
  }

  handleStop(player) {

  }
}