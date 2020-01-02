import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Row, Col } from 'react-grid-system';

class Header extends Component {
    render() {
        return(
            <section className="header">
                <Container>
                    <Row>
                        <Navigation/>
                    </Row>
                    <Row>
                        <CallToAction/>
                    </Row>
                    <Row>
                        <SlackChannel/>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Header;