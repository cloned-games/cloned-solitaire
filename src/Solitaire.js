import React from 'react';
import logo from './logo.svg';
import './Solitaire.css';

function Solitaire() {
  return (
    <div className="app-container">
      <header>
        Deal.. Deck.. Options.. Undo Score:0 Time:0
      </header>
      <div className="game-container">
        <div className="row">
          <div className="row-cards">A</div>
          <div className="row-cards">K</div>
          <div className="row-cards">J</div>
          <div className="row-cards">Q</div>
          <div className="row-cards">10</div>
        </div>
        <div className="row">
          <div className="row-cards">1</div>
          <div className="row-cards">2</div>
          <div className="row-cards">3</div>
          <div className="row-cards">4</div>
          <div className="row-cards">5</div>
          <div className="row-cards">6</div>
          <div className="row-cards">7</div>
        </div>
      </div>
    </div>
  );
}

export default Solitaire;
