import React, { useState, useCallback } from 'react';
import { Button } from '../button';

interface CounterProps {
  initCount?: number;
  note?: string;
}

export const Counter = (props: CounterProps) => {
  const [count, setCount]= useState<number>(props.initCount || 0);

  const onDecrement = useCallback((): void => {
    setCount(count - 1);
  }, [count]);

   const onIncrement = useCallback((): void => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="ClassCounter">
      <Button text="-" onClick={onDecrement}/>
      <div>{count}</div>
      <Button text="+" onClick={onIncrement}/>
      <br/>
      <small>{props.note}</small>
    </div>
  )
}

Counter.defaultProps = {
  note: 'Function component (hooks)',
} as Partial<CounterProps>;
