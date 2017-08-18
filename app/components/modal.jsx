import React from 'react';

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
            <h3>{this.props.modalType}</h3>
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
