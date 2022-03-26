import { ActionType } from '../action-types';
import { Action } from '../actions';

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.USERNAME:
      return state + action.payload;

    case ActionType.NICKNAME:
      return state + action.payload;

    default:
      return state;
  }
};

export default reducer;
