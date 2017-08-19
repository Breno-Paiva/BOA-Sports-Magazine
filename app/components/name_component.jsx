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
        <h2>**name component modal**</h2>
        <h4>{this.props.name.first} {this.props.name.last}</h4>
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
          <button onClick={e =>this.props.closeModal(e)}>cancel</button>
          <input  type="submit" value={'save'} />
          <br/>
        </form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameModal);
