// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { Button, ButtonGroup } from 'reactstrap';

import { setSortBy } from '../redux';

type Props = {
    dispatch: Dispatch<*>;
    _sortBy: string;
    _order: 'asc' | 'desc';
};

class ToggleOrderButtonGroup extends Component<Props> {
    constructor(props) {
        super(props);

        this._setSortByDate = this._setSortByDate.bind(this);
        this._setSortByTitle = this._setSortByTitle.bind(this);
    }

    render() {
        return (
            <ButtonGroup size = 'sm' className = 'mx-3'>
                <Button disabled color = 'secondary'>Sort By</Button>
                <Button
                    color = 'light'
                    className = { (this.props._sortBy === 'title') ? 'active' : '' }
                    onClick = { this._setSortByTitle }
                > Title </Button>
                <Button
                    color = 'light'
                    className = { (this.props._sortBy === 'publishedDate') ? 'active' : '' }
                    onClick = { this._setSortByDate }
                > Published Date </Button>
            </ButtonGroup>
        );
    }

    _setSortByTitle: (*) => void;

    _setSortByTitle() {
        this.props._sortBy !== 'title' && this.props.dispatch(setSortBy('title'));
    }

    _setSortByDate: (*) => void;

    _setSortByDate() {
        this.props._sortBy !== 'publishedDate' && this.props.dispatch(setSortBy('publishedDate'));
    }
}

function _mapStateToProps(state) {
    return {
        _order: state.sort.order,
        _sortBy: state.sort.sortBy
    };
}

export default connect(_mapStateToProps)(ToggleOrderButtonGroup);
