import React from 'react';

const PicturePreview = (props) => {
    const { pictureURL } = props;
    console.log(pictureURL)

    return (
        <img className="responsive-img" src={pictureURL} alt="upload preview"/>
    );
}

export default PicturePreview;
