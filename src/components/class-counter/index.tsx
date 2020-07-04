import React from 'react';
import { Button } from '../button';
import './style.scss';

interface ClassCounterProps {
  initCount?: number;
  note?: string;
}

interface ClassCounterState {
  count: number;
}

export class ClassCounter extends React.Component<ClassCounterProps, ClassCounterState> {
  state:ClassCounterState = {
    count: 0,
  }

  static defaultProps = {
    note: 'Class component (this.setState)',
  } as Partial<ClassCounterProps>

  componentDidMount(): void {
    if (this.props.initCount) {
      this.setState({count: this.props.initCount});
    }
  }

  onDecrement = (): void => {
    this.setState((prevState: ClassCounterState): ClassCounterState => ({
      count: prevState.count - 1,
    }));
  }

  onIncrement = (): void => {
    this.setState((prevState: ClassCounterState): ClassCounterState => ({
      count: prevState.count + 1,
    }));
  }

  render(): JSX.Element {
    return (
      <div className="ClassCounter">
        <Button text="-" onClick={this.onDecrement}/>
        <div>{this.state.count}</div>
        <Button text="+" onClick={this.onIncrement}/>
        <br/>
        <small>{this.props.note}</small>
      </div>
    );
  }
}
