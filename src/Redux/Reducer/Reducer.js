import { ActionType } from "../ActionType/ActionType";

const initalState = {
  SubNavData: [
    { name: "HOME" },
    { name: "GAME CONSOLES" },
    { name: "VIDEO GAME" },
    { name: "TRADING GAMES" },
    { name: "VIDEO GAME ACCESSORIES" },
    { name: "TOURNAMENTS" },
    { name: "CONTACT" },
  ],
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionType.SET_DATA:
      return {
        ...state,
        DataList: action.payload,
      };

    case ActionType.SEND_DATA:
      return {
        ...state,
        SendData: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
