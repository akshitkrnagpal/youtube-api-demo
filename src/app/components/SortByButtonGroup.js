import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'reactstrap';

import { setSortBy } from '../redux';

class ToggleOrderButtonGroup extends Component {
    constructor(props) {
        super(props);

        this._setSortByDate = this._setSortByDate.bind(this);
        this._setSortByTitle = this._setSortByTitle.bind(this);
    }

    render() {
        return (
            <ButtonGroup size = 'sm' className = 'mx-3'>
                <Button disabled color = 'dark'>Sort By</Button> 
                <Button
                    color = { (this.props._sortBy === 'title') ? 'danger' : 'light' }
                    onClick = { this._setSortByTitle }
                > Title </Button>
                <Button
                    color = { (this.props._sortBy === 'publishedDate') ? 'danger' : 'light' }
                    onClick = { this._setSortByDate }
                > Published Date </Button>
            </ButtonGroup>
        );
    }

    _setSortByTitle() {
        this.props.dispatch(setSortBy('title'));
    }

    _setSortByDate() {
        this.props.dispatch(setSortBy('publishedDate'));
    }
}

function _mapStateToProps(state) {
    return {
        _order: state.sort.order,
        _sortBy: state.sort.sortBy
    };
}

export default connect(_mapStateToProps)(ToggleOrderButtonGroup);
