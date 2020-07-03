import { counterTypes } from '../types';

export interface CounterState {
  count: number;
}

export interface IncrementCounter {
  type: counterTypes.increment;
}

export interface DecrementCounter {
  type: counterTypes.decrement;
}

export interface ChangeCounter {
  type: counterTypes.changeValue;
  count: number;
}
