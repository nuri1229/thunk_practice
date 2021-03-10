import { createAction } from "typesafe-actions";

export const counterAction = createAction("COUNTER_ACTION")<number>();
