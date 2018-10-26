// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import {
    Button,
    Form,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import { searchYoutube } from '../redux';

type Props = {
    dispatch: Dispatch<*>;
};

type State = {
    query: string;
};

class SearchInput extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    render() {
        const { query } = this.state;

        return (
            <Form onSubmit = { this._onSubmit } className = 'w-100'>
                <InputGroup size = 'lg'>
                    <Input
                        value = { query }
                        onChange = { this._onChange }
                    />
                    <InputGroupAddon addonType = 'append'>
                        <Button
                            color = 'danger'
                            onClick = { this._onSubmit } >
                            Search Youtube
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        );
    }

    _onChange: (*) => void;

    _onChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    _onSubmit: (*) => void;

    _onSubmit(event) {
        event.preventDefault()
        this.props.dispatch(searchYoutube(this.state.query));
    }
}

export default connect()(SearchInput);
