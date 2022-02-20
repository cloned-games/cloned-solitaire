import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Card from '../card/Card';
import './HandPile.css';

function HandPile({ deck }) {
  const filteredDeck = deck.filter((item) => !item.slot.match('pile_deck'));
  const [handPiles, setHandPiles] = useState({ filteredDeck });
  const [hasDropped, setHasDropped] = useState(false);
  const addImageToBoard = (item, monitor) => {
    console.log(item);
    console.log(monitor);
    console.log(monitor.getDropResult());
    // console.log('placing card in a slot with id: ' + id);
    // const handDeck = handPiles.filteredDeck.filter((card) => card.id === id);
    // console.log('item that is moving: ' + handDeck[0].id);
    // setHandPiles((handPiles) => [...handPiles, handDeck[0]]);
  };
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'card',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
    drop: (_item, monitor) => {
      const didDrop = monitor.didDrop();
      console.log('did drop');
      if (didDrop) {
        return;
      }
      setHasDropped(true);
      addImageToBoard(_item, monitor);
    },
  }));
  return (
    <div className="hand-pile-container">
      <div ref={drop} id="hand_pile_1" key="1" className="card-slot">
        {handPiles.filteredDeck.filter((item) => item.slot.match('pile_1')).map((card, index) => (
          <Card
            key={index}
            id={'hand_pile_1:' + card.id}
            rowNum={index}
            altText="slot 1 cards"
            direction={index === 0 ? 'up' : 'down'}
            draggable={index === 0 ? 'true' : 'false'}
            value={card}
          />
        ))}
      </div>
      <div id="hand_pile_2" key="2" className="card-slot">
        {handPiles.filteredDeck.filter((item) => item.slot.match('pile_2')).map((card, index) => (
          <Card
            key={index}
            id={'hand_pile_2:' + card.id}
            rowNum={index}
            altText="slot 2 cards"
            direction={index === 1 ? 'up' : 'down'}
            draggable={index === 1 ? 'true' : 'false'}
            value={card}
          />
        ))}
      </div>
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
