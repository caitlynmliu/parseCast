import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class TestComponent extends Component {

    render() {
        return(
            <div>
                <h1>{this.props.randomText}</h1>
            </div>
        )
    }
}


