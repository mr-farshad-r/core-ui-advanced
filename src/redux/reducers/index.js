import {combineReducers} from "redux";
import {CoreUI} from "./core-ui";

export const root_reducer = combineReducers({
	CoreUI: CoreUI
});
