import React from 'react';
import PropTypes from 'prop-types';
import CardBack from '../../assets/CardBack.svg';
import OneDiamond from '../../assets/1D.svg';
import './Card.css';

export default function Card({
  altText, direction, draggable, styleProps, value, width,
}) {
  return (
    <img
      id={value.num + '_' + value.suit}
      alt={altText}
      className="card"
      draggable={draggable}
      style={styleProps}
      src={direction === 'down' ? CardBack : OneDiamond}
      width={width}
    />
  );
}

Card.defaultProps = {
  altText: 'image element',
  direction: 'down',
  draggable: 'false',
  styleProps: {},
  value: {},
  width: '100%',
};

Card.propTypes = {
  altText: PropTypes.string,
  direction: PropTypes.string,
  draggable: PropTypes.string,
  styleProps: PropTypes.instanceOf(Object),
  value: PropTypes.instanceOf(Object),
  width: PropTypes.string,
};
