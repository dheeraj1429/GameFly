import { ActionType } from "../ActionType/ActionType";

export const SetData = (data) => {
  return {
    type: ActionType.SET_DATA,
    payload: data,
  };
};

export const SendData = (data) => {
  return {
    type: ActionType.SEND_DATA,
    payload: data,
  };
};

export const joinGame = (data) => {
  return {
    type: ActionType.JOIN,
    payload: data,
  };
};
