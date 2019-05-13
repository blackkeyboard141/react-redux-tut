import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducers";
function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer, state);
}
export default configureStore;
