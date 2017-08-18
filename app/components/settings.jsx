import React from 'react';
import Modal from './modal';
import NameModal from './name_component';
import AddressModal from './address_component';

class Settings extends React.Component{
  constructor(props){
    super(props);
    this.name = props.store.getState().name;
    this.address = props.store.getState().address;
    this.teams = props.store.getState().team;
    this.state = { modalType: null }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchInfo = this.fetchInfo.bind(this);
  }

// modal is controlled with the two functions below.  A null modal render nothing and acts as a closed modal.  If the state has a designated modalType, then that's what renders
  openModal(modalType){
    this.setState({modalType: modalType})
  }
  closeModal(){
    this.fetchInfo()
    this.setState({modalType: null })
  }

  fetchInfo(){
    this.name = this.props.store.getState().name;
    this.address = this.props.store.getState().address;
    this.teams = this.props.store.getState().team;
  }

  render(){
    return (
      <div>
        <h1>SportsMag Settings</h1>
        <div>
          <h2>Name</h2>
          <h4>{this.name.first} {this.name.last}</h4>
          <button onClick={e => this.openModal(NameModal)}>Edit Name</button>
        </div>
        <div>
          <h2>Address</h2>
          <h4>{this.address.street}</h4>
          <h4>{this.address.city}, {this.address.state} {this.address.zip}</h4>
          <button onClick={e => this.openModal(AddressModal)}>Edit Address</button>
        </div>
        <div>
          <h2>Teams</h2>
          <ol>
            {
              this.teams.map(team => (
                <li>
                  <h4>{team}</h4>
                </li>
              ))
            }
         </ol>
         <button onClick={e => this.openModal("teams")}>Update Teams</button>
        </div>
        <Modal modalType={this.state.modalType} closeModal={this.closeModal}/>
      </div>
    );
  }
}

export default Settings;
