import { connect } from 'react-redux';
import { updateName } from '../actions/name_actions';
import React from 'react'

const mapStateToProps = (state) => {
  return { name: state.name };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: name => dispatch(updateName(name)),
  };
};

class NameModal extends React.Component {
  debugger
  render() {
    return(
      <div>
        <h2>name component modal</h2>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameModal);
