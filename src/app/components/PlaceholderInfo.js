// @flow

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { Component } from 'react';
import { Card, CardText, Row } from 'reactstrap';

type Props = {
    icon: string;
    text: string;
};

class PlaceholderInfo extends Component<Props> {
    render() {
        const { icon, text } = this.props;
        return (
            <Row className = 'my-5'>
                <Card body className = 'text-center p-5'>
                    <FontAwesomeIcon
                        className = 'mx-auto my-5'
                        icon = { icon }
                        size = '5x'
                        spin = { icon === 'spinner' }
                    />
                    <CardText className = 'lead'>
                        { text }
                    </CardText>
                </Card>
            </Row>
        );
    }
}

export default PlaceholderInfo;
