import React from 'react';
import NameModal from './name_component';

class Modal extends React.Component {
  close(e) {
    e.preventDefault()
    this.props.closeModal();
  }
  render() {
    if(this.props.modalType){
      return(
        <div>
          <div className="modal">
            <h2>Modal</h2>
            < this.props.modalType />
          </div>
          <div className="backdrop" onClick={e => this.close(e)}/>
        </div>
      )
    }else{
    return null
    }
  }
}

export default Modal;
