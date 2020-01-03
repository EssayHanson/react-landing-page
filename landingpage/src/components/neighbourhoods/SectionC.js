import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

class SectionC extends Component {
    render() {
        return(
            <section className="section-c">
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

export default SectionC;