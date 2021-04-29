import React, {Component} from 'react';

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map(gif => this.getGifElement(gif))}
            </ul>
        );
    }

    getGifElement = gif => {
        return (
            <li>
                <img src={gif} />
            </li>
        );
    }
}