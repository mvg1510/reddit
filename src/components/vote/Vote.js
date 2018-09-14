import React from 'react';
import './Vote.css';

function Vote() {
    return (
        <React.Fragment>
            <i className="fa fa-arrow-up"></i>   
            <div className="Reddit-Vote-Counter">13</div>
            <i className="fa fa-arrow-down"></i>  
        </React.Fragment>
    );
}

export default Vote;