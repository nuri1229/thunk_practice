import { ThunkAction } from "redux-thunk";
import { AppState } from "../reducer";
import { counterAction } from "../action";

export function counterThunk(
  count: number
): ThunkAction<void, AppState, null, ReturnType<typeof counterAction>> {
  return async (dispatch, getState) => {
    const state = getState();

    return dispatch(counterThunk2(count + 1));
  };
}

export function counterThunk2(
  count: number
): ThunkAction<void, AppState, null, ReturnType<typeof counterAction>> {
  return async (dispatch, getState) => {
    const state = getState();
    console.log("state2", state);
    dispatch(counterAction(count));
  };
}
