import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {

    // console.log(this.props);
    const { projects } = this.props;

    return (
      <div>
<iframe frameborder="0" src="https://itch.io/embed-upload/1713055?color=333333" allowfullscreen="" width="1366" height="768"></iframe>
      <div className="dashboard container">

        <div className="row">
          <div className="col s12 m12">
            <ProjectList maxWidth="800" projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            {/* <Notifications /> */}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
