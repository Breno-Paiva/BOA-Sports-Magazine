export const RECEIVE_NAME = "RECEIVE_NAME";

export const updateName = name => dispatch => {
  dispatch(receiveName(name))
};

export const receiveName = name => ({
  type: RECEIVE_NAME,
  name
});
