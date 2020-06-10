import React from 'react';
import { Link } from 'react-router-dom';

const IdolList = ({idols}) => {
    return (
        <div className="idol-list section">
            {idols && idols.map(idol => {
                return (
                    // <Link to={'/project/' + project.id} key={project.id} >
                    //     <ProjectSummary project={project} />
                    // </Link>
                    <Link to={'/idol/' + idol.id} key={idol.id} >
                        <p>idol</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default IdolList;
