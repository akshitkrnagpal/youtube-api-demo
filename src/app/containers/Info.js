import React, { Component } from 'react';
import { Card, CardText, Row } from 'reactstrap';

class Info extends Component {
    render() {
        const { text } = this.props;

        return (
            <Row className = 'my-5'>
                <Card body className = 'text-center p-5'>
                    <CardText>
                        { text }
                    </CardText>
                </Card>
            </Row>
        );
    }
}

export default Info;
