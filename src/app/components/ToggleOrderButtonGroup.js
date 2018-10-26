// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { ButtonGroup, Button } from 'reactstrap';

import { setOrder } from '../redux';

type Props = {
    dispatch: Dispatch<*>;
    _sortBy: string;
    _order: 'asc' | 'desc';
};

class ToggleOrderButtonGroup extends Component<Props> {
    constructor(props) {
        super(props);

        this._setAscending = this._setAscending.bind(this);
        this._setDescending = this._setDescending.bind(this);
    }

    render() {
        if (this.props._sortBy === undefined) {
            return null;
        }
        const AClassName = (this.props._order === 'asc') ? 'active' : '';
        const DClassName = (this.props._order === 'desc') ? 'active' : '';

        return (
            <ButtonGroup size = 'sm' className = 'mx-3'>
                <Button disabled color = 'secondary'>Order</Button>
                <Button
                    color = 'light'
                    className = { AClassName }
                    onClick = { this._setAscending }> Asc </Button>
                <Button
                    color = 'light'
                    className = { DClassName }
                    onClick = { this._setDescending }> Desc </Button>
            </ButtonGroup>
        );
    }

    _setAscending: (*) => void;

    _setAscending() {
        this.props._order !== 'asc' && this.props.dispatch(setOrder('asc'))
    }

    _setDescending: (*) => void;

    _setDescending() {
        this.props._order !== 'desc' && this.props.dispatch(setOrder('desc'))
    }
}

function _mapStateToProps(state) {
    return {
        _order: state.sort.order,
        _sortBy: state.sort.sortBy
    };
}

export default connect(_mapStateToProps)(ToggleOrderButtonGroup);
