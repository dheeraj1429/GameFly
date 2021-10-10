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
  joindata: [],
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

    case ActionType.JOIN:
      return {
        ...state,
        joindata: [
          ...state.joindata,
          {
            joinPayer: action.payload,
          },
        ],
      };

    default:
      return state;
  }
};

export default userReducer;
