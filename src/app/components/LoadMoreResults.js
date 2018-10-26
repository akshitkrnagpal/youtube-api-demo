// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { Button } from 'reactstrap';

import { searchYoutube } from '../redux';

type Props = {
    dispatch: Dispatch<*>;
    _loading: boolean;
    _nextPageToken: string | null;
    _query: string;
};

class LoadMoreResults extends Component<Props> {
    constructor(props) {
        super(props);

        this._loadMoreResults = this._loadMoreResults.bind(this);
    }

    render() {
        const text = ( this.props._loading ) ? 'Loading...' : 'See More Results';

        return (
            <Button
                disabled = { this.props._loading }
                color = 'danger'
                size = 'lg'
                onClick = { this._loadMoreResults }
            >
                { text }
            </Button>
        );
    }

    _loadMoreResults: (*) => void;

    _loadMoreResults() {
        this.props.dispatch(searchYoutube(this.props._query, this.props._nextPageToken));
    }
}

function _mapStateToProps(state) {
    return {
        _loading: state.search.loading,
        _query: state.search.query,
        _nextPageToken: state.search.nextPageToken
    };
}

export default connect(_mapStateToProps)(LoadMoreResults);
