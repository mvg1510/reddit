import React from 'react';
import './Image.css';

function Image({ images }) {
    let image = images[0].source;

    return (
        <img src={image.url} alt=""/>
    );
}

export default Image;