import React, { Component } from 'react';
import './Vote.css';

class Vote extends Component {
    state = {
        score: this.props.score,
        min: this.props.score - 1,
        max: this.props.score + 1,
    };

    onRateUp() {
        // TODO AJAX CALL
        let newValue = this.state.score + 1;

        if(newValue > this.state.max) {
            return;
        }

        this.setState({
            score: newValue
        });
    }

    onRateDown() {
        // TODO AJAX CALL
        let newValue = this.state.score - 1;

        if(newValue < this.state.min) {
            return;
        }

        this.setState({
            score: newValue
        });
    }

    render() {
        return (
            <React.Fragment>
                <i onClick={() => this.onRateUp()} className={`fa fa-arrow-up ${this.state.score === this.state.max && 'selected'}`}></i>   
                <div className="Reddit-Vote-Counter">{ this.state.score }</div>
                <i onClick={() => this.onRateDown()} className={`fa fa-arrow-down ${this.state.score === this.state.min && 'selected'}`}></i>  
            </React.Fragment>
        );
    }
}

export default Vote;