import { combineReducers } from "redux";
import { todos } from "./todos";

//Essa função recebe um estado atual e uma ação.
export const rootReducer = combineReducers({
	todos
})