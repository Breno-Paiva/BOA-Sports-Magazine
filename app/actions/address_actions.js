export const RECEIVE_ADDRESS = "RECEIVE_ADDRESS";

export const updateAddress = address => dispatch => {
  dispatch(receiveAddress(address))
};

export const receiveAddress = address => ({
  type: RECEIVE_ADDRESS,
  address
});
