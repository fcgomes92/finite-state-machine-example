import React from 'react';
// import states
import PlayingState from './PlayingState';
import IdleState from './IdleState';
import PausedState from './PausedState';

export default class Player extends React.Component {
  state = {
    currentState: 0,
    states: [new IdleState(), new PlayingState(), new PausedState()],
    stateNames: [`Idle`, `Playing`, `Paused`],
    inputs: { PLAY: 0, NEXT: 1, PREVIOUS: 2, STOP: 3 },
    transitions: [
      [1, 0, 0, 0],
      [2, 1, 1, 0],
      [1, 1, 1, 0],
    ],
    songs: ['Worst Behavior', 'Proud', 'Diamonds'],
    currentSong: 0,
  };

  onPlay = () => {
    this.state.states[this.state.currentState].handlePlay(this);
  };

  onNext = () => {
    this.state.states[this.state.currentState].handleNext(this);
  };

  onPrevious = () => {
    this.state.states[this.state.currentState].handlePrevious(this);
  };

  onStop = () => {
    this.state.states[this.state.currentState].handleStop(this);
  };

  render() {
    let pauseIcon = `||`;
    let playIcon = `>`;
    let prevIcon = `Prev`;
    let stopIcon = `S`;
    let nextIcon = `N`;
    return (
      <div>
        <h1>{this.state.songs[this.state.currentSong]}</h1>
        <div className="player">
          <button onClick={() => this.onPrevious()}>{prevIcon}</button>
          <button onClick={() => this.onPlay()}>{this.state.currentState === 1 ? pauseIcon : playIcon}</button>
          <button onClick={() => this.onStop()}>{stopIcon}</button>
          <button onClick={() => this.onNext()}>{nextIcon}</button>
        </div>
        <h2>{this.state.stateNames[this.state.currentState]}</h2>
      </div>
    )
  }
}