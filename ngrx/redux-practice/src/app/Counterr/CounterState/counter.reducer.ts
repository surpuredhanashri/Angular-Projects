import { increment, decrement, reset, customIncrement, customNameChange } from './counter.action';
import { initialState } from './counter.state';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement,(state,action)=>{
    return{
      ...state,
      counter: state.counter +action.count,
    }
  }),
  on(customNameChange,(state)=>{
    return{
      ...state,
      name:"Gyan"
    }
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
