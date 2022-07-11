import React from 'react';
import './namecard.css'

const nameUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ suggestedName }) => {
    return (
        <a target="_blank" rel="noreferrer" className='card-link' href={`${nameUrl}${suggestedName}`}>
            <div className='result-name-card'>
                <p className='result-name'>{suggestedName}</p>
            </div>
        </a>

    )
}

export default NameCard;