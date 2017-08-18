import { RECEIVE_ADDRESS } from "../actions/address_actions";
import merge from "lodash/merge"

const AddressReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_ADDRESS:
      return action.address;
    default:
      return state;
  }
};

export default AddressReducer;
