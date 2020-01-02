import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <Header/>
                <SectionA/>
                <SectionB/>
                <SectionC/>
                <Footer/>
            </div>
        )
    }
}

export default LandingPage;