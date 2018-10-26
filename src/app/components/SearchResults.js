// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { Row } from 'reactstrap';
import moment from 'moment';

import {
    PlaceholderInfo,
    SortByButtonGroup,
    ToggleOrderButtonGroup,
    YoutubeVideoResult
} from '../components';

type Props = {
    dispatch: Dispatch<*>;
    _error: Object;
    _items: Array<Object>;
    _loading: boolean;
    _sortBy: string;
    _order: 'asc' | 'desc';
};

class SearchResults extends Component<Props> {
    render() {

        // Return Loading.
        if (this.props._loading) {
            return <PlaceholderInfo icon = 'spinner'/>
        }

        // Return Error Message.
        if (this.props._error) {
            const error = this.props._error;
            const message = error.data || error.response.data.error.message;
            return <PlaceholderInfo icon = 'exclamation' text = { message || 'Some Error Occured' } />
        }

        // Return PLaceholder for Search.
        if (this.props._items.length <= 0) {
            return <PlaceholderInfo icon = 'search' text = 'Search for videos' />
        }

        // Return Search Results.
        return (
            <Row>
                <div className = 'clearfix w-100 py-4'>
                    <div className = 'float-right'>
                        <ToggleOrderButtonGroup />
                        <SortByButtonGroup />
                    </div>
                </div>
                <div className='card-deck'>
                    { this._renderItems() }
                </div>
            </Row>
        );
    }

    _renderItems() {
        // Don't consider Items other than Videos (like Channels).
        const items = this.props._items.filter(item => item.id.kind === 'youtube#video');

        // Sort based on Title
        if( this.props._sortBy === 'title' ) {
            if ( this.props._order === 'asc' ) {
                items.sort((A, B) => A.snippet.title.localeCompare(B.snippet.title) );
            } else {
                items.sort((A, B) => B.snippet.title.localeCompare(A.snippet.title) );
            }
        }

        // Sort based on publishedDate
        if( this.props._sortBy === 'publishedDate' ) {
            if ( this.props._order === 'asc' ) {
                items.sort((A, B) => moment.utc(A.snippet.publishedAt).diff(moment.utc(B.snippet.publishedAt)));
            } else {
                items.sort((A, B) => moment.utc(B.snippet.publishedAt).diff(moment.utc(A.snippet.publishedAt)));
            }
        }

        return items.map(item => (
            <YoutubeVideoResult
                key = { item.id.videoId }
                videoId = { item.id.videoId }
                snippet = { item.snippet }
            />
        ));
    }
}

function _mapStateToProps(state) {
    return {
        _loading: state.search.loading,
        _items: state.search.items,
        _error: state.search.error,
        _sortBy: state.sort.sortBy,
        _order: state.sort.order
    };
}

export default connect(_mapStateToProps)(SearchResults);
