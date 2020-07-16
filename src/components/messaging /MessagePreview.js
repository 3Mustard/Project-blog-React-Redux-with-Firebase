import React from 'react';
import moment from 'moment';

const MessagePreview = (props) => {
    const { message } = props;

    return (
        <div className="card z-depth-0 message-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{message.title}</span>
                <p><i>{message.sender} sent you a message!</i></p>
                <p className="grey-text">{ moment(message.createdAt.toDate()).calendar() }</p>
            </div>
        </div>
    )
}

export default ProjectPreview;
