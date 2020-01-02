import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

class SectionB extends Component {
    render() {
        return(
            <section className="section-b">
                <Container>
                    <Row>
                        <ArticleCover/>
                        <SectionDescription/>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default SectionB;