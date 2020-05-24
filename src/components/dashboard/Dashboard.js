import React, { Component } from 'react';
import { compose } from 'redux';

//firestore imports
import { firestoreConnect } from 'react-redux-firebase';

//function imports
import { connect } from 'react-redux';

//Component Imports 
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Deashboard extends Component {
    render(){
        // console.log(this.props);
        const { projects } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Deashboard);
