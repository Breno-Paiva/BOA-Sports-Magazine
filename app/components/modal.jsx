import React from 'react';
import NameModal from './name_component';

class Modal extends React.Component {

  render() {
    if(this.props.modalType){
      return(
        <div>
          <div className="modal">
            < this.props.modalType closeModal={this.props.closeModal}/>
          </div>
          <div className="backdrop" onClick={e => this.props.closeModal(e)}/>
        </div>
      )
    }else{
    return null
    }
  }
}

export default Modal;
