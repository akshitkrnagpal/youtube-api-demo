import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import { SearchInput, ToggleOrderButtonGroup } from '../components';

import SearchResults from './SearchResults';

class Main extends Component {
    render() {
        return (
            <Container>
                <Row className = 'py-5'>
                    <SearchInput />
                </Row>
                <Row>
                    <ToggleOrderButtonGroup />
                </Row>
                <SearchResults />
            </Container>
        );
    }
}

export default Main;
