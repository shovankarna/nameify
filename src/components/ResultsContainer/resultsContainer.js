import React from 'react';
import NameCard from '../NameCard/namecard';
import './resultsContainer.css';

const ResultContainer = ({ suggestedNames }) => {

    const suggestedNamesList = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });

    return (
        <div className='results-container'>
            {suggestedNamesList}
        </div>
    );
}

export default ResultContainer;