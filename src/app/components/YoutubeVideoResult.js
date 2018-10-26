// @flow

import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from 'reactstrap';

import moment from 'moment';

type Props = {
    snippet: Object;
    videoId: string;
};

class YoutubeVideoResult extends Component<Props> {

    youtubeLink: string;

    constructor(props: Props) {
        super(props);

        this.youtubeLink = `https://www.youtube.com/watch?v=${props.videoId}`

        this._openYoutube = this._openYoutube.bind(this);
    }

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
                <CardImgOverlay>
                    <Button
                        className = 'position-absolute'
                        style = {{ bottom: '0.4rem', right: '0.4rem' }}
                        color = 'danger'
                        size = 'sm'
                        onClick = { this._openYoutube }
                    > View </Button>
                </CardImgOverlay>
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

    _openYoutube: (*) => void;

    _openYoutube() {
        window.open(this.youtubeLink, '_blank')
    }
}

export default YoutubeVideoResult;
