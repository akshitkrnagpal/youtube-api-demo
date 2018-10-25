import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import { SearchInput, ToggleOrderButtonGroup, SortByButtonGroup } from '../components';

import SearchResults from './SearchResults';

class Main extends Component {
    render() {
        return (
            <Container>
                <Row className = 'py-5'>
                    <SearchInput />
                </Row>
                <Row>
                    <div className = 'clearfix w-100 py-4'>
                        <div className = 'float-right'>
                            <ToggleOrderButtonGroup />
                            <SortByButtonGroup />
                        </div>
                    </div>
                </Row>
                <SearchResults />
            </Container>
        );
    }
}

export default Main;
