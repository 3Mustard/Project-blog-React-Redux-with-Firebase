import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import IdolList from '../idols/IdolList'

class Deashboard extends Component {
    render(){
        console.log(this.props)
        const { projects, idols, notifications, auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin" />;
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <IdolList idols={idols}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        idols: state.firestore.ordered.idols,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']},
        { collection: 'idols', orderBy: ['birthName', 'desc'] }
    ])
)(Deashboard);
