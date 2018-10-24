import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Form,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import { setQuery } from '../redux';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: this.props._query
        };

        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    render() {
        const { query } = this.state;

        return (
            <Form onSubmit = { this._onSubmit } className = 'w-100'>
                <InputGroup>
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

    _onChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    _onSubmit(event) {
        event.preventDefault()
        this.props.dispatch(setQuery(this.state.query));
    }
}

function _mapStateToProps(state) {
    return {
        _query: state.query.query
    };
}

export default connect(_mapStateToProps)(SearchInput);
