import React from 'react';

class Settings extends React.Component{
  constructor(props){
    super(props);
    this.name = props.store.getState().name
  }

  render(){
    return (
      <div>
        <h1>SportsMag Settings</h1>
        <h2>Name</h2>
        <h4>{this.name.first}</h4>
        <h4>{this.name.last}</h4>
      </div>
    );
  }
}

export default Settings;
