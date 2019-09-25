import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
    {props.monstros.map(monstro => (
    <Card key={monstro.id} monstro={monstro}/>
    ))};
    </div>
);
