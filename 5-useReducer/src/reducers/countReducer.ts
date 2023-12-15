import { ActionType, InitialStateType } from "../models/types";
import ACTION from "../utils/action";

export default function countReducer(
  state: InitialStateType,
  action: ActionType
) {
  switch (action.type) {
    case ACTION.INCREASE: {
      return { count: state.count + 1 };
    }

    case ACTION.DECREASE: {
      return { count: state.count - 1 };
    }

    case ACTION.RESET: {
      return { count: 0 };
    }

    default:
      return state;
  }
}
