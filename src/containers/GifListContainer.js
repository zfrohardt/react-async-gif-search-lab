import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    apiEndpoint = 'https://api.giphy.com/v1/gifs/search?';
    apiKey = 'dc6zaTOxFJmzC'; // default api key = dc6zaTOxFJmzC

    constructor() {
        super();
        this.state = {
            searchResults: [],
        }
    }

    render() {
        return (
            <div>
                <GifSearch onSubmit={this.fetchGifs} />
                <GifList gifs={this.state.searchResults}/>
            </div>
        );
    } 

    fetchGifs = query => {
        fetch(`${this.apiEndpoint}q=${query}&api_key=${this.apiKey}&rating=g`).then(resp => resp.json())
        .then(gifs => {
            let topResults = gifs.data.slice(0, 3);
            topResults = topResults.map(result => result.images.original.url);
            this.setState({
                searchResults: topResults,
            })
        });
    }
}