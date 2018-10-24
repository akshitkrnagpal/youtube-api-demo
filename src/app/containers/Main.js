import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import { SearchInput } from '../components';

class Main extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <SearchInput />
                </Row>
            </Container>
        );
    }
}

export default Main;
