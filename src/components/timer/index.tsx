import * as React from 'react';

export type Stop = () => void;

export interface ITimerProps {
  interval: number;
  task: (stop: Stop) => void;
}

export class Timer extends React.Component<ITimerProps, object> {
  handle: number = 0;
  stop: Stop = () => {
    if (this.handle) {
      window.clearInterval(this.handle);
      this.handle = 0;
    }
  }
  invoke = () => {
    let {task} = this.props;
    task(this.stop);
  }
  componentDidMount() {
    let {interval} = this.props;
    this.handle = window.setInterval(this.invoke, interval);
  }
  componentWillUnmount() {
    this.stop();
  }
  render() {
    return (<div />);
  }
}