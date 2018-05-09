import React from 'react';

export default class IdleState {
  handleCook(microwave) {
    const stateId = microwave.state.currentState;
    const inputId = microwave.state.inputs.COOK;
    const currentState = microwave.state.transitions[stateId][inputId];

    microwave.setState({
      currentState: currentState,
    });
  }

  handlePause(microwave) {
    const stateId = microwave.state.currentState;
    const inputId = microwave.state.inputs.PAUSE;
    const currentState = microwave.state.transitions[stateId][inputId];

    microwave.setState({
      currentState: currentState,
    });
  }

  handleStop(microwave) {
    const stateId = microwave.state.currentState;
    const inputId = microwave.state.inputs.STOP;
    const currentState = microwave.state.transitions[stateId][inputId];

    microwave.setState({
      value: null,
      currentState: currentState,
    });
  }

  handleInput(microwave, value) {
    const stateId = microwave.state.currentState;
    const inputId = microwave.state.inputs.INPUT;
    const currentState = microwave.state.transitions[stateId][inputId];

    microwave.setState({
      value: value,
      currentState: currentState,
    });
  }
}