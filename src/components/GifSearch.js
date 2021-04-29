import React, {Component} from 'react';

export default class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} >
                <input type='text' onChange={this.changeHandler} />
                <button>Search</button>
            </form>
        );
    }

    changeHandler = event => {
        this.setState({
            value: event.target.value,
        })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
    }
}