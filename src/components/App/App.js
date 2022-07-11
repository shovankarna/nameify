import React from 'react';
import './App.css';

import Header from './../Header/header.js';
import SearchBox from '../SearchBox/searchbox';
import ResultContainer from '../ResultsContainer/resultsContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        headerText: 'NameIfy!',
        headerExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (inputText) => {

        this.setState({
            headerExpanded: !(inputText.target.value.length > 0),
            suggestedNames: inputText.target.value ? name(inputText.target.value) : []
        })
        // console.log(inputText.target.value)
    }

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}


export default App;