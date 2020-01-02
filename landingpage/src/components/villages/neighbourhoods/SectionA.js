import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

class SectionA extends Component {
    render() {
        return(
            <section className="section-a">
                <Container>
                    <Row>
                        <SectionDescription/>
                        <Laptop/>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default SectionA;