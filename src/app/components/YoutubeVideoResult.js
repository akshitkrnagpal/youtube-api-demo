// @flow

import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    CardText
} from 'reactstrap';

import moment from 'moment';

type Props = {
    snippet: Object;
};

class YoutubeVideoResult extends Component<Props> {
    render() {
        const {
            title,
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

export default YoutubeVideoResult;
