import React from 'react';
import { Link } from 'react-router-dom';
import IdolDetails from './IdolDetails';

const IdolList = ({idols}) => {
    return (
        <div className="idol-list section">
            {idols && idols.map(idol => {
                return (
                    // <Link to={'/project/' + project.id} key={project.id} >
                    //     <ProjectSummary project={project} />
                    // </Link>
                    <p>idol</p>
                )
            })}
        </div>
    )
}

export default IdolList;
