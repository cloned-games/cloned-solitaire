import React from 'react';
import PropTypes from 'prop-types';
import Hearts from '../../assets/Hearts.svg';
import Spades from '../../assets/Spades.svg';
import './HomePile.css';

export default function HomePile() {
  const suits = ['heart', 'club', 'diamond', 'spade'];
  return (
    <div className="home-pile">
      {suits.map((suit, index) => (
        <div key={index} className="card-slot">
          <div className="card-border">
            <img
              alt={suit}
              className="home-slot"
              src={index % 2 ? Hearts : Spades}
              width="30px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
