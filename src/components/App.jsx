import React, { Component } from 'react';
import DisplayText from './DisplayText';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'world',
            text: 'I love learning React!', //NOT
            newInput: '',
            hasLoaded: false,
        };
    }

    componentDidMount() {
        this.setState({ hasLoaded: true });
    }

    handleStateHasLoaded() { 
        if (this.state.hasLoaded === false) {
        this.setState({ hasLoaded: true });
        } else {
            this.setState({ hasLoaded: false })
        }
    }


    handleInputChange = (value) => {
        this.setState({ newInput: value });
    }

    render() {
        if (this.state.hasLoaded === false) {
            return (
                <React.Fragment>
                <h1>Loading...</h1>
                <button onClick={ (event) =>this.handleStateHasLoaded(event) }>Check If Loaded</button>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <input
                        placeholder='Write a new input!'
                        value={this.state.newInput}
                        onChange={ (event) => this.handleInputChange(event.target.value) }
                    />
                    <button onClick={ (event) => this.handleStateHasLoaded(event) }>Check Me</button>
                    <h1>Hello, { this.state.name }!</h1>
                    <DisplayText text={ this.state.text } />
                </React.Fragment>
            );
        }
    }
}

/**
const App = (props) => {

    return <h1>Hello, {props.name}!</h1>;
}
*/
export default App;