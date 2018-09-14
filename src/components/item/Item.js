import React from 'react';
import Vote from './../vote/Vote';
import Image from './../image/Image';
import Content from './../content/Content';
import './Item.css';

function Item({ item }) {
    return (
        <div className="Reddit-Item">
            <div className="Reddit-Vote">
                <Vote />       
            </div>
            <div className="Reddit-Image">
                {item.preview && item.preview.images && <Image images={item.preview.images} /> || <div className="NoImage">Post without image</div>}
            </div>
            <div className="Reddit-Content">
                <Content item={item} />
            </div>
        </div>
    );
}

export default Item; 