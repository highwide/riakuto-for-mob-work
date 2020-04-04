import React, { Component } from 'react';
import Timer from '../component/Timer';

const LIMIT = 60;

interface TimerState {
  timeLeft: number;
}

class TimerContainer extends Component<{}, TimerState> {
  constructor(props: {}) {
    super(props);
    this.state = { timeLeft: LIMIT };
  }

  reset = () => {
    this.setState({ timeLeft: LIMIT });
  };

  tick = () => {
    this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));
  };

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  componentDidUpdate = () => {
    const { timeLeft } = this.state;
    if (timeLeft === 0){
      this.reset();
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerId as NodeJS.Timer);
  };

  timerId?: NodeJS.Timer;

  render() {
    const { timeLeft } = this.state;

    return (
      <Timer timeLeft={timeLeft} reset={this.reset} />
    );
  }
}

export default TimerContainer;
