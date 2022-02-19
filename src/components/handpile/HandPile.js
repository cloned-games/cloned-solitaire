import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import './HandPile.css';

function HandPile({ deck }) {
  const handDeck = deck.filter((item) => !item.slot.match('pile_deck'));
  console.log(handDeck);
  return (
    <>
      {Array.from(Array(7), (_, i) => i + 1).map((slotNum, _idx) => (
        <div key={_idx} className="card-slot">
          {handDeck.filter((item) => item.slot.match('pile_' + slotNum)).map((card, index) => (
            <Card
              key={index}
              altText={'slot ' + slotNum + ' cards'}
              direction={index === slotNum - 1 ? 'up' : 'down'}
              draggable={index === slotNum - 1 ? 'true' : 'false'}
              styleProps={{ position: 'absolute', top: 15 * index + 'px' }}
              value={card}
            />
          ))}
        </div>
      ))}
    </>
  );
}

HandPile.defaultProps = {
  deck: [],
};

HandPile.propTypes = {
  deck: PropTypes.instanceOf(Array),
};

export default HandPile;
