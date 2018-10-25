import React, { Component } from 'react';
import { Badge, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardFooter } from 'reactstrap';
import moment from 'moment';

import { YoutubeVideoSnippet } from '../data';

class YoutubeVideoResult extends Component {
    render() {
        const {
            title,
            channelTitle,
            description,
            thumbnails,
            publishedAt
        } = this.props.snippet;

        const date = moment(publishedAt).fromNow();

        return (
            <Card className = 'mb-4'>
                <CardImg top src = { thumbnails.high.url } />
                <CardBody className = 'pb-0'>
                    <CardTitle> { title } </CardTitle>
                    <CardText className = 'py-2'> { description } </CardText>
                </CardBody>
                <CardFooter>
                    <small className = 'text-muted'> Uploaded { date } </small>
                </CardFooter>
            </Card>
        );
    }
}

YoutubeVideoResult.defaultProps = {
    snippet: YoutubeVideoSnippet
};

export default YoutubeVideoResult;
