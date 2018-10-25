import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'reactstrap';

import { setOrder } from '../redux';

class ToggleOrderButtonGroup extends Component {
    constructor(props) {
        super(props);

        this._setAscending = this._setAscending.bind(this);
        this._setDescending = this._setDescending.bind(this);
    }

    render() {
        if (!this.props._sortBy) {
            return null;
        }
        return (
            <ButtonGroup size = 'sm'>
                <Button onClick = { this._setAscending }> Asc </Button>
                <Button onClick = { this._setDescending }> Desc </Button>
            </ButtonGroup>
        );
    }

    _setAscending() {
        if(this.props._order !== 'asc') {
            this.props.dispatch(setOrder('asc'))
        }
    }

    _setDescending() {
        if(this.props._order !== 'desc') {
            this.props.dispatch(setOrder('desc'))
        }
    }
}

function _mapStateToProps(state) {
    return {
        _order: state.sort.order
    };
}

export default connect(_mapStateToProps)(ToggleOrderButtonGroup);
