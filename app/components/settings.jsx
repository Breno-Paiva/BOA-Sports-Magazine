import React from 'react';
import Modal from './modal';
import NameModal from './name_component';
import AddressModal from './address_component';
import TeamModal from './team_component';

class Settings extends React.Component{
  constructor(props){
    super(props);
    this.name = props.store.getState().name;
    this.address = props.store.getState().address;
    this.team = props.store.getState().team;
    this.state = { modalType: null }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchInfo = this.fetchInfo.bind(this);
  }

// modal is controlled with the two functions below.  A null modal render nothing and acts as a closed modal.  If the state has a designated modalType, then that's what renders
  openModal(modalType){
    this.setState({ modalType: modalType })
  }
  closeModal(){
    this.fetchInfo()
    this.setState({ modalType: null })
  }

  fetchInfo(){
    this.name = this.props.store.getState().name;
    this.address = this.props.store.getState().address;
    this.team = this.props.store.getState().team;
  }

  render(){
    let teamButton = null
    if(this.team.length > 0) {
        teamButton = <button className='settings-button' onClick={e => this.openModal(TeamModal)}>Update Teams</button>
    }else {
      teamButton = <button className='settings-button' onClick={e => this.openModal(TeamModal)}>Add Teams</button>
    }
    return (
      <div className='settings'>
        <h1 className='page-title'>SportsMag Settings</h1>
        <div className='setting-group'>
          <div>
            <h3>Name</h3>
            <h5>{this.name.first} {this.name.last}</h5>
          </div>
          <button className='settings-button' onClick={e => this.openModal(NameModal)}>Edit Name</button>
        </div>
        <div className='setting-group'>
          <div>
            <h3>Address</h3>
            <h5>{this.address.street}</h5>
            <h5>{this.address.city}, {this.address.state} {this.address.zip}</h5>
          </div>
          <button className='settings-button' onClick={e => this.openModal(AddressModal)}>Edit Address</button>
        </div>
        <div className='setting-group'>
          <div>
            <h3>Teams</h3>
            <ol>
              {
                this.team.map((team, key) => (
                  <li key={`team-list-${key}`}>
                    <h5>{team}</h5>
                  </li>
                ))
              }
            </ol>
          </div>
         {teamButton}
        </div>
        <Modal modalType={this.state.modalType} closeModal={this.closeModal}/>
      </div>
    );
  }
}

export default Settings;
