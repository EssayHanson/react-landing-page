import React, { Component } from 'react';
import { Col } from 'react-grid-system';

import Title from '../houses/Title';
import Subtitle from '../houses/Subtitle';
import Button from '../houses/Button';

class CallToAction extends Component {
    render() {
        return(
            <Col lg={12}>
                <Title/>
                <Subtitle/>
                <Button/>
            </Col>
        )
    }
}

export default CallToAction;