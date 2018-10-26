// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { Row } from 'reactstrap';
import moment from 'moment';

import {
    SortByButtonGroup,
    ToggleOrderButtonGroup,
    YoutubeVideoResult
} from '../components';

import Info from './Info';

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
        if (this.props._loading) {
            return <Info text = 'Loading'/>
        }
        if (this.props._error) {
            return <Info text = { this.props._error.errors[0].message } />
        }
        if (this.props._items.length <= 0) {
            return <Info text = 'Search for videos' />
        }
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
        const items = this.props._items.filter(item => item.id.kind === 'youtube#video');
        switch(this.props._sortBy) {
            case 'title':
                if ( this.props._order === 'asc' ) {
                    items.sort((A, B) => A.snippet.title.localeCompare(B.snippet.title) );
                } else {
                    items.sort((A, B) => B.snippet.title.localeCompare(A.snippet.title) );
                }
                break;
            case 'publishedDate':
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
