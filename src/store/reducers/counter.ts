import { counterTypes } from '../types';
import { IncrementCounter, DecrementCounter, ChangeCounter, CounterState } from '../interfaces';

const initState = {
  count: 0,
};

type CounterActions = IncrementCounter | DecrementCounter | ChangeCounter;

const counter = (state: CounterState = initState, action: CounterActions): CounterState => {
  switch (action.type) {
    case counterTypes.increment:
      return {
        ...state,
        count: state.count + 1,
      }
    case counterTypes.decrement:
      return {
        ...state,
        count: state.count - 1,
      }
    case counterTypes.changeValue:
      return {
        ...state,
        count: action.count,
      }
    default:
      return state;
  }
};

export default counter;
