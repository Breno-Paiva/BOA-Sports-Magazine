export const RECEIVE_NAME = "RECEIVE_NAME";

export const updateName = name => dispatch => ({
  type: RECEIVE_NAME,
  name
});
