// @flow

import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import { SearchInput } from '../components';

import SearchResults from './SearchResults';

type Props = {};

class Main extends Component<Props> {
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
