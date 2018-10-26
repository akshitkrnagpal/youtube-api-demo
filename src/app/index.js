// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Main } from './containers';
import { store } from './redux';

type Props = {};

class App extends Component<Props> {
    render() {
        return (
            <Provider store = { store }>
                <Main />
            </Provider>
        );
    }
}

export default App;
