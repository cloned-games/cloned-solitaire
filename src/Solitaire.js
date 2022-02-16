import React from 'react';
import logo from './logo.svg';
import './Solitaire.css';

function Solitaire() {
  return (
    <div className="app-container">
      <header style={{ backgroundColor: '#d3d3d3' }}>
        Deal.. Deck.. Options.. Undo Score:0 Time:0
      </header>
      <div className="game-container">
        <div className="top-row">
          <div className="deal-pile">
            <div className="card-slot" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
              <img
                alt="cartman"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg"
                width="150px"
              />
            </div>
            <div className="open-pile" />
          </div>
          <div className="home-pile">
            <div className="card-slot">
              <div className="card-border">
                <img
                  alt="heart"
                  className="card"
                  src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/heart.svg"
                  width="30px"
                />
              </div>
            </div>
            <div className="card-slot">
              <div className="card-border">
                <img
                  alt="club"
                  className="card"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Spades.svg"
                  width="30px"
                />
              </div>
            </div>
            <div className="card-slot">
              <div className="card-border">
                <img
                  alt="diamond"
                  className="card"
                  src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/heart.svg"
                  width="30px"
                />
              </div>
            </div>
            <div className="card-slot">
              <div className="card-border">
                <img
                  alt="spade"
                  className="card"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Spades.svg"
                  width="30px"
                />
              </div>
            </div>
          </div>
        </div>
        {/* bottom row */}
        <div className="bottom-row">
          <div className="card-slot">
            <div className="card-border">
              <img
                alt="first slot"
                className="card"
                draggable="true"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ top: '0px' }}
                width="120px"
              />
            </div>
          </div>
          <div className="card-slot">
            <div className="card-border">
              <img
                alt="second slot face down"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '0px' }}
                width="120px"
              />
              <img
                alt="second slot face up"
                className="card"
                draggable="true"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/sync.svg"
                style={{ position: 'absolute', top: '5px', borderTop: '1px solid black' }}
                width="120px"
              />
            </div>
          </div>
          <div className="card-slot">
            <div className="card-border">
              <img
                alt="third slot face down 1"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '0px' }}
                width="120px"
              />
              <img
                alt="third slot face down 2"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '5px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="third slot face up"
                className="card"
                draggable="true"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/sync.svg"
                style={{ position: 'absolute', top: '10px', borderTop: '1px solid black' }}
                width="120px"
              />
            </div>
          </div>
          <div className="card-slot">
            <div className="card-border">
              <img
                alt="fourth slot face down 1"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '0px' }}
                width="120px"
              />
              <img
                alt="fourth slot face down 2"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '5px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="fourth slot face down 3"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '10px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="fourth slot face up"
                className="card"
                draggable="true"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/sync.svg"
                style={{ position: 'absolute', top: '15px', borderTop: '1px solid black' }}
                width="120px"
              />
            </div>
          </div>
          <div className="card-slot">
            <div className="card-border">
              <img
                alt="fifth slot face down 1"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '0px' }}
                width="120px"
              />
              <img
                alt="fifth slot face down 2"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '5px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="fifth slot face down 3"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '10px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="fifth slot face down 4"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '15px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="fifth slot face up"
                className="card"
                draggable="true"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/sync.svg"
                style={{ position: 'absolute', top: '20px', borderTop: '1px solid black' }}
                width="120px"
              />
            </div>
          </div>
          <div className="card-slot">
            <div className="card-border">
              <img
                alt="sixth slot face down 1"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '0px' }}
                width="120px"
              />
              <img
                alt="sixth slot face down 2"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '5px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="sixth slot face down 3"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '10px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="sixth slot face down 4"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '15px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="sixth slot face down 5"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '20px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="sixth slot face up"
                className="card"
                draggable="true"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/sync.svg"
                style={{ position: 'absolute', top: '25px', borderTop: '1px solid black' }}
                width="120px"
              />
            </div>
          </div>
          <div className="card-slot">
            <div className="card-border">
              <img
                alt="seventh slot face down 1"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '0px' }}
                width="120px"
              />
              <img
                alt="seventh slot face down 2"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '5px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="seventh slot face down 3"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '10px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="seventh slot face down 4"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '15px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="seventh slot face down 5"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '20px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="seventh slot face down 6"
                className="card"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feedsync.svg"
                style={{ position: 'absolute', top: '25px', borderTop: '1px solid black' }}
                width="120px"
              />
              <img
                alt="seventh slot face up"
                className="card"
                draggable="true"
                src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/sync.svg"
                style={{ position: 'absolute', top: '30px', borderTop: '1px solid black' }}
                width="120px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solitaire;
