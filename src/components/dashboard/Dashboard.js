import React, { Component } from 'react';

//function imports
import { connect } from 'react-redux';

//Component Imports 
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Deashboard extends Component {
    render(){
        console.log(this.props);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
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
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Deashboard);
