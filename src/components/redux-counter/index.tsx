import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from '../button';
import { incrementCounter, decrementCounter, changeCounterValue } from '../../store/actions';
import { CounterState, AppState } from '../../store/interfaces';

interface ReduxCounterProps {
  note?: string;
}

export const ReduxCounter = (props: ReduxCounterProps) => {
  const dispatch: Dispatch = useDispatch();
  const counter: CounterState = useSelector((state: AppState): CounterState => state.counter)

  const onDecrement = useCallback((): void => {
    dispatch(decrementCounter());
  }, []);

  const onIncrement = useCallback((): void => {
    dispatch(incrementCounter());
  }, []);

  const onSetRandomValue = useCallback((): void => {
    dispatch(changeCounterValue(+(Math.random() * 10).toFixed(0)));
  }, []);

  return (
    <div className="ClassCounter">
      <Button text="-" onClick={onDecrement}/>
      <div>{counter.count}</div>
      <Button text="+" onClick={onIncrement}/>
      <Button text="Set random value" onClick={onSetRandomValue}/>
      <br/>
      <small>{props.note}</small>
    </div>
  )
}

ReduxCounter.defaultProps = {
  note: 'Function component (state in redux store)',
} as Partial<ReduxCounterProps>;
