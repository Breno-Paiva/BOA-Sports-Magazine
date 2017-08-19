import { connect } from 'react-redux';
import { updateAddress } from '../actions/address_actions';
import React from 'react'

const mapStateToProps = (state) => {
  return { address: state.address };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAddress: address => dispatch(updateAddress(address))
  };
};

class AddressModal extends React.Component {

  constructor(props){
    super(props);
    this.state = { street: this.props.address.street,
                     city: this.props.address.city,
                    state: this.props.address.state,
                      zip: this.props.address.zip }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateAddress({ street: this.state.street,
                                 city: this.state.city,
                                state: this.state.state,
                                  zip: this.state.zip })
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
        <h2>Edit Address</h2>
        <h4>{this.props.address.first} {this.props.address.last}</h4>
        <form id="address-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.street}
            onChange={this.update("street")}
          />
          <br/>
          <input
            type="text"
            value={this.state.city}
            onChange={this.update("city")}
          />
          <br/>
          <select form="address-form"
                  value={this.state.state}
                  onChange={this.update("state")}>
            	<option value="AL">"AL"</option>
            	<option value="AK">"AK"</option>
            	<option value="AR">"AR"</option>
            	<option value="AZ">"AZ"</option>
            	<option value="CA">"CA"</option>
            	<option value="CO">"CO"</option>
            	<option value="CT">"CT"</option>
            	<option value="DC">"DC"</option>
            	<option value="DE">"DE"</option>
            	<option value="FL">"FL"</option>
            	<option value="GA">"GA"</option>
            	<option value="HI">"HI"</option>
            	<option value="IA">"IA"</option>
            	<option value="ID">"ID"</option>
            	<option value="IL">"IL"</option>
            	<option value="IN">"IN"</option>
            	<option value="KS">"KS"</option>
            	<option value="KY">"KY"</option>
            	<option value="LA">"LA"</option>
            	<option value="MA">"MA"</option>
            	<option value="MD">"MD"</option>
            	<option value="ME">"ME"</option>
            	<option value="MI">"MI"</option>
            	<option value="MN">"MN"</option>
            	<option value="MO">"MO"</option>
            	<option value="MS">"MS"</option>
            	<option value="MT">"MT"</option>
            	<option value="NC">"NC"</option>
            	<option value="NE">"NE"</option>
            	<option value="NH">"NH"</option>
            	<option value="NJ">"NJ"</option>
            	<option value="NM">"NM"</option>
            	<option value="NV">"NV"</option>
            	<option value="NY">"NY"</option>
            	<option value="ND">"ND"</option>
            	<option value="OH">"OH"</option>
            	<option value="OK">"OK"</option>
            	<option value="OR">"OR"</option>
            	<option value="PA">"PA"</option>
            	<option value="RI">"RI"</option>
            	<option value="SC">"SC"</option>
            	<option value="SD">"SD"</option>
            	<option value="TN">"TN"</option>
            	<option value="TX">"TX"</option>
            	<option value="UT">"UT"</option>
            	<option value="VT">"VT"</option>
            	<option value="VA">"VA"</option>
            	<option value="WA">"WA"</option>
            	<option value="WI">"WI"</option>
            	<option value="WV">"WV"</option>
            	<option value="WY">"WY"</option>
          </select>
          <br/>
          <input
            type="text"
            value={this.state.zip}
            onChange={this.update("zip")}
          />
          <br/>
          <br/>
          <button className='cancel-button' onClick={e => this.props.closeModal(e)}>cancel</button>
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
)(AddressModal);
