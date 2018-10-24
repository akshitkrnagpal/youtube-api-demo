import React, { Component } from 'react';
import {
    Button,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this._onChange = this._onChange.bind(this);
    }

    render() {
        const { query } = this.state;

        return (
            <InputGroup>
                <InputGroupAddon addonType = 'prepend'>
                    <Button color = 'danger'> Youtube Search </Button>
                </InputGroupAddon>
                <Input
                    value = { query }
                    onChange = { this._onChange }
                />
                <InputGroupAddon addonType = 'append'>
                    <Button color = 'danger'> Go </Button>
                </InputGroupAddon>
            </InputGroup>
        );
    }

    _onChange(event) {
        this.setState({
            query: event.target.value
        });
    }
}

export default SearchInput;
