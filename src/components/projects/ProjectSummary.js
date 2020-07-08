import React from 'react';
import moment from 'moment';
import DeleteProject from './DeleteProject';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.idol}</span>
                <p>Posted by: <i>{project.authorFirstName + project.authorLastName}</i></p>
                <p className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</p>
                <DeleteProject project={project} />
            </div>
        </div>
    )
}

export default ProjectSummary;
