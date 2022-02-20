import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Card from '../card/Card';
import './HandPile.css';

function HandPile({ deck }) {
  const filteredDeck = deck.filter((item) => !item.slot.match('pile_deck'));
  const [handPiles, setHandPiles] = useState({ filteredDeck });
  const handleDrop = (item, monitor) => {
    console.log(item);
    console.log(monitor);
    console.log(monitor.getDropResult());
    console.log(monitor.getClientOffset());
  };
  const [{ isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: (item, monitor) => handleDrop(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div ref={drop} className="hand-pile-container">
      {Array.from(Array(7), (_, i) => i + 1).map((slotNum, _idx) => (
        <div id={'hand_pile_' + slotNum} key={_idx} className="card-slot">
          {handPiles.filteredDeck.filter((item) => item.slot.match('pile_' + slotNum)).map((card, index) => (
            <Card
              key={index}
              id={'hand_pile_' + slotNum + ':' + card.id}
              altText={'slot ' + slotNum + ' cards'}
              rowNum={index}
              direction={index === slotNum - 1 ? 'up' : 'down'}
              draggable={index === slotNum - 1 ? 'true' : 'false'}
              value={card}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

HandPile.defaultProps = {
  deck: [],
};

HandPile.propTypes = {
  deck: PropTypes.instanceOf(Array),
};

export default HandPile;
