import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

class Footer extends Component {
    render() {
        return(
            <section className="footer">
                <Container>
                    <Row>
                        <Navigation/>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Footer;