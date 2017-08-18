import { RECEIVE_TEAM } from "../actions/team_actions";
import merge from "lodash/merge"

const TeamReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_TEAM:
      return action.team;
    default:
      return state;
  }
};

export default TeamReducer;
