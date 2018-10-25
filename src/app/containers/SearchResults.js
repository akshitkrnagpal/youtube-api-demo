import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

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
    };
}

export default connect(_mapStateToProps)(SearchResults);
