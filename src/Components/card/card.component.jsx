import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monstro" src={`https://robohash.org/${props.monstro.id}?set=set2&size=180x180`}/>
        <h2>{props.monstro.name}</h2>
        <p>{props.monstro.email}</p>
    </div>
);

