import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DemoLink extends Component {
    render() {
        return (
            <div>
                <a href="#">
                    <span className="demo-link">
                        Demo
                    </span>
                </a>
            </div>
        );
    }
}

export default DemoLink;