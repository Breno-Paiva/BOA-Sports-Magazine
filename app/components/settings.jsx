import React from 'react';

class Settings extends React.Component{
  constructor(props){
    super(props);
    this.name = props.store.getState().name;
    this.address = props.store.getState().address;
    this.teams = props.store.getState().team;
  }

  render(){
    return (
      <div>
        <h1>SportsMag Settings</h1>
        <div>
          <h2>Name</h2>
          <h4>{this.name.first} {this.name.last}</h4>
        </div>
        <div>
          <h2>Address</h2>
          <h4>{this.address.street}</h4>
          <h4>{this.address.city}, {this.address.state} {this.address.zip}</h4>
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
        </div>
      </div>
    );
  }
}

export default Settings;
