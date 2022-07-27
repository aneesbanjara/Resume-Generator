import avilableUserReducer from "./userReducer";
import { combineReducers } from "redux";
import userCountReducer from "./userCountReducer";

const rootReducer = combineReducers({
  avilableUserReducer,
  userCountReducer
})

export default rootReducer;


