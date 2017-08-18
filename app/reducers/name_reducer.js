import { RECEIVE_NAME } from "../actions/name_actions";
import merge from "lodash/merge"

const NameReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_NAME:
      return action.name;
    default:
      return state;
  }
};

export default NameReducer;
