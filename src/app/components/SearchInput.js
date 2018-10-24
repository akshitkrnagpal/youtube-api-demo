import React, { Component } from 'react';
import {
    Button,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

class SearchInput extends Component {
    render() {
        return (
            <InputGroup>
                <InputGroupAddon addonType = 'prepend'>
                    <Button color = 'danger'> Youtube Search </Button>
                </InputGroupAddon>
                <Input />
            </InputGroup>
        );
    }
}

export default SearchInput;
