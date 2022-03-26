import { ActionType } from '../action-types';

interface userNameAction {
  type: ActionType.USERNAME;
  payload: string;
}

interface nickNameAction {
  type: ActionType.NICKNAME;
  payload: string;
}

export type Action = userNameAction | nickNameAction;
