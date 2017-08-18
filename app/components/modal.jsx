import React from 'react';

class Modal extends React.Component {

  close(e) {
    e.preventDefault()
    this.props.closeModal();
  }

  render() {
    if(this.props.isOpen === false){
        return null
    }else{
      return(
        <div>
          <div className="modal">
            <h2>Modal</h2>
          </div>
          <div className="backdrop" onClick={e => this.close(e)}/>}
        </div>
      )
    }
  }
}

export default Modal;
