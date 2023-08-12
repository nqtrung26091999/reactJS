import React, { Component } from 'react';
import './TrafficLight.css'
import classNames from 'classnames';

const RED = 0;
const GREEN = 1;
const ORANGE = 2;

class TrafficLight extends Component {

    render() {
        const { currentColor } = this.props;
        return(
            <div className='container'>
                <div className={classNames('red', {
                    active: currentColor === RED
                })}></div>
                <div className={classNames('orange', {
                    active: currentColor === ORANGE
                })}></div>
                <div className={classNames('green', {
                    active: currentColor === GREEN 
                })}></div>
            </div>
        )
    }
}

export default TrafficLight;