import React from 'react';
import { Link } from 'react-router-dom';

const IdolList = ({idols}) => {
    return (
        <div className="idol-list section">
            {idols && idols.map(idol => {
                return (
                    <div className="section">
                        <div className="card">
                            <div className="card-content">
                                <Link to={'/idol/' + idol.id} key={idol.id} >
                                    {idol.stageName}
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default IdolList;
