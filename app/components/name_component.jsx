import { connect } from 'react-redux';
import { updateName } from '../actions/name_actions';
import React from 'react'

const mapStateToProps = (state) => {
  return { name: state.name };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: name => dispatch(updateName(name))
  };
};

class NameModal extends React.Component {

  render() {
    return(
      <div>
        <h2>**name component modal**</h2>
        <h4>{this.props.name.first} {this.props.name.last}</h4>
        <button onClick={() => this.props.updateName({first:'ron', last:'weasly'})}>change to ron</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameModal);
