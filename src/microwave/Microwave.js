import React from 'react';
import IdleState from './IdleState';
import InputingTimeState from './InputingTimeState';
import CookState from './CookState';
import PausedState from './PausedState';


export default class Microwave extends React.Component {
  state = {
    currentState: 0,
    states: [new IdleState(), new CookState(), new PausedState(), new InputingTimeState()],
    stateNames: [`Idle`, `Cooking`, `Paused`, `InputingTime`],
    inputs: { STOP: 0, COOK: 1, PAUSE: 2, INPUT: 3 },
    transitions: [
      [0, 0, 0, 3],
      [0, 1, 2, 1],
      [0, 1, 2, 2],
      [0, 1, 3, 3],
    ],
    timer: null,
    value: null,
  };

  onCook = () => {
    this.state.states[this.state.currentState].handleCook(this);
  };

  onInput = e => {
    this.state.states[this.state.currentState].handleInput(this, e.target.innerHTML);
  };

  onPause = () => {
    this.state.states[this.state.currentState].handlePause(this);
  };

  onStop = () => {
    this.state.states[this.state.currentState].handleStop(this);
  };

  timedown = () => {
    let value = parseInt(this.state.value) - 1;
    if (!isNaN(value) && this.state.timer)
      if (value < 0) {
        this.onStop();
      } else {
        this.setState({
          value: `${value}`,
        });
        this.setState({ timer: setTimeout(this.timedown, 1000) })
      }
  };

  renderKeyboard() {
    return (
      <div>
        <div>
          INPUT: {this.state.value}
        </div>
        <div>
          <button onClick={this.onInput}>1</button>
          <button onClick={this.onInput}>2</button>
          <button onClick={this.onInput}>3</button>
        </div>
        <div>
          <button onClick={this.onInput}>4</button>
          <button onClick={this.onInput}>5</button>
          <button onClick={this.onInput}>6</button>
        </div>
        <div>
          <button onClick={this.onInput}>7</button>
          <button onClick={this.onInput}>8</button>
          <button onClick={this.onInput}>9</button>
        </div>
        <div>
          <button onClick={this.onInput}>0</button>
        </div>
        <div>
          <button onClick={this.onCook}>COOK</button>
          <button onClick={this.onStop}>STOP</button>
          <button onClick={this.onPause}>PASUE</button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="microwave-keyboard">
          {this.renderKeyboard()}
        </div>
        <h2>{this.state.stateNames[this.state.currentState]}</h2>
      </div>
    )
  }
}