import React from 'react';
import { Link } from 'react-router-dom';
// import MessagePreview from 

const MessageList = ({messages}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="s12 m5">
                    {messages && messages.map(message => {
                        return (
                        <Link to={'/message/' + message.id} key={message.id} >
                            <MessagePreview message={message} />
                        </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default MessageList;
