import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import { Action } from '../actions';

export const userName = (amount: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.USERNAME,
      payload: amount,
    });
  };
};

export const nickName = (amount: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.NICKNAME,
      payload: amount,
    });
  };
};
