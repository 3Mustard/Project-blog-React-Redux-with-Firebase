import React from 'react';
import moment from 'moment'

const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card z-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        { notifications && notifications.map(note => {
                            return (
                                <li key={note.id}>
                                    <span className='pink-text'>{note.user} </span>
                                    <span>{note.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(note.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;
