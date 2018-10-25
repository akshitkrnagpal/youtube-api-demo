import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import { SearchInput } from '../components';

import SearchResults from './SearchResults';

class Main extends Component {
    render() {
        return (
            <Container>
                <Row className = 'py-5'>
                    <SearchInput />
                </Row>
                <SearchResults />
            </Container>
        );
    }
}

export default Main;
