// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import { store } from './redux';

import {
    SearchInput,
    SearchResults
 } from './components';

import './fontawesome';

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <Provider store = { store }>
                <Container>
                    <SearchInput />
                    <SearchResults />
                </Container>
            </Provider>
        );
    }
}

export default App;
