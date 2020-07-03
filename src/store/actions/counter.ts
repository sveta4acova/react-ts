import { counterTypes } from '../types';
import { IncrementCounter, DecrementCounter, ChangeCounter } from '../interfaces';

export const incrementCounter = (): IncrementCounter => ({
  type: counterTypes.increment,
})

export const decrementCounter = (): DecrementCounter => ({
  type: counterTypes.decrement,
})

export const changeCounterValue = (count: number): ChangeCounter => ({
  type: counterTypes.changeValue,
  count,
})
