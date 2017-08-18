export const RECEIVE_TEAM = "RECEIVE_TEAM";

export const updateTeam = team => dispatch => {
  dispatch(receiveTeam(team))
};

export const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  team
});
