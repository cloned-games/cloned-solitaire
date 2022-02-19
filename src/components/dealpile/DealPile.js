import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import './DealPile.css';

export default function DealPile({ deck }) {
  return (
    <div className="deal-pile">
      {deck.filter((item) => item.slot.match('pile_deck')).map((card, index) => (
        <div key={index}>
          <div
            className="card-slot"
            style={{
              marginLeft: (index === 0 ? 0 : 0.25 + (0.75 * index) + 'px'),
              position: 'absolute',
              opacity: '0.6',
            }}
          >
            <Card
              altText="deal deck cards"
              value={card}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

DealPile.defaultProps = {
  deck: [],
};

DealPile.propTypes = {
  deck: PropTypes.instanceOf(Array),
};
