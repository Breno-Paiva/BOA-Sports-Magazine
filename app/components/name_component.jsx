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

  constructor(props){
    super(props);
    this.state = { firstName: this.props.name.first, lastName: this.props.name.last }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateName({first: this.state.firstName, last: this.state.lastName})
    this.props.closeModal(e);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
// {this.renderErrors()}

  render() {
    return(
      <div>
        <div className='x-close'>
          <h6 onClick={e =>this.props.closeModal(e)}>
            Close <i className="fa fa-times-circle" aria-hidden="true"></i>
          </h6>
        </div>
        <div className='modal-header'>
          <h4>Edit Name</h4>
        </div>
        <div className='modal-form'>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.update("firstName")}
              />
            <br/>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.update("lastName")}
              />
            <br/>
            <button className='cancel-button' onClick={e =>this.props.closeModal(e)}>cancel</button>
            <input  type="submit" value={'save'} />
            <br/>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameModal);
