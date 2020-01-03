import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

class CallToAction extends Component {
    render() {
        return(
            <Col lg={12}>
                <Title/>
                <SubTitle/>
                <Button/>
            </Col>
        )
    }
}

export default CallToAction;