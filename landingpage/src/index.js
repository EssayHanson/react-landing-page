import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import * as serviceWorker from './serviceWorker';

class App extends Component {
    render() {
        return (
            <div className="section-a">
                <Container>
                    <Row>
                        <Col lg={6}>
                            1/2 grid here!
                        </Col>
                        <Col lg={6}>
                            1/2 grid here!
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
