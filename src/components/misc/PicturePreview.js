import React from 'react';

const PicturePreview = (props) => {
    const { pictureURL } = props;

    return (
        <img className="responsive-img" src={pictureURL} alt="upload preview"/>
    );
}

export default PicturePreview;
