import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

import { YoutubeVideoSnippet } from '../data';

class YoutubeVideoResult extends Component {
    render() {
        const {
            title,
            description,
            thumbnails,
            publishedAt
        } = this.props.snippet;

        return (
            <Card>
                <CardImg top src = { thumbnails.default.url } />
                <CardBody>
                    <CardTitle> { title } </CardTitle>
                    <CardText> { description } </CardText>
                    <CardText>
                        <small className = 'text-muted'> { publishedAt } </small>
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

YoutubeVideoResult.defaultProps = {
    snippet: YoutubeVideoSnippet
};

export default YoutubeVideoResult;
