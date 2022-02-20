import { React, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DealPile from './components/dealpile/DealPile';
import HandPile from './components/handpile/HandPile';
import HomePile from './components/homepile/HomePile';
import OpenPile from './components/openpile/OpenPile';
import logo from './logo.svg';
import './Solitaire.css';

const suitNames = ['_club', '_diamond', '_heart', '_spade'];
const denominations = Array.from({ length: 13 }, (_, index) => index + 1);
const suits = suitNames.map((suit) => denominations.map((id) => id.toString().concat(suit))).sort();
// console.log(suits);
const deck = suits.reduce((card, suit) => card.concat(suit), []);
// console.log(deck);

function shuffleDeck(cards) {
  const deckArray = cards;
  for (let index = deckArray.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temp = deckArray[index];
    deckArray[index] = deckArray[randomIndex];
    deckArray[randomIndex] = temp;
  }
  return deckArray;
}

function distributeDeck(cards) {
  let handIndex = 1;
  const obj = [];
  for (let index = 0; index < cards.length; index += 1) {
    const suit = cards[index].split('_')[1];
    const num = cards[index].split('_')[0];
    if (index === 7) {
      handIndex = 2;
    } else if (index === 13) {
      handIndex = 3;
    } else if (index === 18) {
      handIndex = 4;
    } else if (index === 22) {
      handIndex = 5;
    } else if (index === 25) {
      handIndex = 6;
    } else if (index === 27) {
      handIndex = 7;
    }
    if (index >= 0 && index < 7) {
      obj.push({ id: num + '_' + suit, suit, num, slot: 'pile_' + handIndex });
    } else if (index >= 7 && index < 13) {
      obj.push({ id: num + '_' + suit, suit, num, slot: 'pile_' + handIndex });
    } else if (index >= 13 && index < 18) {
      obj.push({ id: num + '_' + suit, suit, num, slot: 'pile_' + handIndex });
    } else if (index >= 18 && index < 22) {
      obj.push({ id: num + '_' + suit, suit, num, slot: 'pile_' + handIndex });
    } else if (index >= 22 && index < 25) {
      obj.push({ id: num + '_' + suit, suit, num, slot: 'pile_' + handIndex });
    } else if (index >= 25 && index < 28) {
      obj.push({ id: num + '_' + suit, suit, num, slot: 'pile_' + handIndex });
    } else {
      obj.push({ id: num + '_' + suit, suit, num, slot: 'pile_deck' });
    }
    handIndex += 1;
  }
  return obj;
}

function Solitaire() {
  // const [gameDeck, setGameDeck] = useState([]);
  const shuffled = shuffleDeck(deck);
  const gameDeck = distributeDeck(shuffled);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <header style={{ backgroundColor: '#d3d3d3' }}>
          Deal.. Deck.. Options.. Undo Score:0 Time:0
        </header>
        <div className="game-container">
          <div className="top-row">
            <DealPile
              deck={gameDeck}
            />
            <OpenPile
              deck={gameDeck}
            />
            <HomePile
              deck={gameDeck}
            />
          </div>
          <div className="bottom-row">
            <HandPile
              deck={gameDeck}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default Solitaire;
