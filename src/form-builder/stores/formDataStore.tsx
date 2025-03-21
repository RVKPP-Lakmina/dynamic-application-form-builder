import { SectionState, Action } from "../interfaces/interfaces";

export const initialState: SectionState = {};

export const reducer = (state: SectionState, action: Action): SectionState => {
  switch (action.type) {
    case "UPDATE_SECTION":
      return {
        ...state,
        [action.section]: { ...state[action.section], ...action.payload },
      };
    case "DELETE_SECTION": {
      const newState = { ...state };
      delete newState[action.section];
      return newState;
    }
    case "RESET_STORE":
      return {};
    default:
      return state;
  }
};
