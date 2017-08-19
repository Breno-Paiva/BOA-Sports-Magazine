import { connect } from 'react-redux';
import { updateTeam } from '../actions/team_actions';
import React from 'react'

const mapStateToProps = (state) => {
  return { team: state.team };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTeam: team => dispatch(updateTeam(team))
  };
};

class TeamModal extends React.Component {

  constructor(props){
    super(props);
    this.state = { team: this.props.team }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.addTeam = this.addTeam.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let newTeam = this.state.team.slice();
    for(var i = newTeam.length - 1; i >= 0; i--) {
      if (newTeam[i] === "") {
         newTeam.splice(i, 1);
      }
    }
    this.props.updateTeam(newTeam)
    this.props.closeModal(e);
  }

  addTeam(e){
    e.preventDefault()
    let newTeam = this.state.team.slice();
    newTeam.push("")
    this.setState({team: newTeam})
  }

  update(e, id) {
    let newTeam = this.state.team.slice();
    newTeam[id] = e.currentTarget.value;
    return (this.setState({ team: newTeam }))
  }
// {this.renderErrors()}

  render() {
    return(
      <div>
        <h2>**team component modal**</h2>
        <form onSubmit={this.handleSubmit}>
          <ol>
            {
              this.state.team.map((team, key) => {
                return (
                  <li key={`team-${key}`}>
                    <input
                      type="text"
                      value={team}
                      onChange={e => this.update(e, key)}
                    />
                  </li>)
              })
            }
          </ol>
          <button onClick={e =>this.addTeam(e)}>add team</button>
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
)(TeamModal);
