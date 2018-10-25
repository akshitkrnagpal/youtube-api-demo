import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { YoutubeVideoResult } from '../components';

class SearchResults extends Component {
    render() {
        return (
            <Row>
                <Col xs = '4'>
                    <YoutubeVideoResult />
                </Col>
            </Row>
        );
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
