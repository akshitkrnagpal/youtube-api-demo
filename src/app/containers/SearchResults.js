import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import moment from 'moment';

import { YoutubeVideoResult } from '../components';

class SearchResults extends Component {
    render() {
        return (
            <Row>
                <div className='card-deck'>
                    { this._renderItems() }
                </div>
            </Row>
        );
    }

    _renderItems() {
        const items = this.props._items.filter(item => item.id.kind === 'youtube#video');
        switch(this.props._sortBy) {
            case 'title':
                if ( this.props._order === 'asc' ) {
                    items.sort((A, B) => A.snippet.title.localeCompare(B.snippet.title) );
                } else {
                    items.sort((A, B) => B.snippet.title.localeCompare(A.snippet.title) );
                }
                break;
            case 'publishedAt':
                if ( this.props._order === 'asc' ) {
                    items.sort((A, B) => moment.utc(A.snippet.publishedAt).diff(moment.utc(B.snippet.publishedAt)));
                } else {
                    items.sort((A, B) => moment.utc(B.snippet.publishedAt).diff(moment.utc(A.snippet.publishedAt)));
                }
                break;
        }

        return items.map(item => (
            <YoutubeVideoResult
                key = { item.id.videoId }
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
