import { createReducer } from "typesafe-actions";
import { counterAction } from "../action";

const initState = 0;

export const counterReducer = createReducer<
  number,
  ReturnType<typeof counterAction>
>(initState).handleAction(counterAction, (_, action) => {
  return action.payload;
});
