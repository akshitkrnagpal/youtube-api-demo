import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { SearchInput, YoutubeVideoResult } from '../components';

class Main extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <SearchInput />
                </Row>
                <Row>
                    <Col xs = '4'>
                        <YoutubeVideoResult />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;
