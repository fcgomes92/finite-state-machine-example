import React from 'react';

export default class CookState {
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

    if (microwave.timer) {
      clearTimeout(microwave.timer);
    }

    microwave.setState({
      timer: null,
      currentState: currentState,
    });
  }

  handleStop(microwave) {
    const stateId = microwave.state.currentState;
    const inputId = microwave.state.inputs.STOP;
    const currentState = microwave.state.transitions[stateId][inputId];

    if (microwave.timer) {
      clearTimeout(microwave.timer);
    }

    microwave.setState({
      timer: null,
      value: null,
      currentState: currentState,
    });
  }

  handleInput(microwave, value) {
    const stateId = microwave.state.currentState;
    const inputId = microwave.state.inputs.INPUT;
    const currentState = microwave.state.transitions[stateId][inputId];

    microwave.setState({
      currentState: currentState,
    });
  }
}