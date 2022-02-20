import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import CardBack from '../../assets/CardBack.svg';
import OneDiamond from '../../assets/1D.svg';
import './Card.css';

export default function Card({
  altText, direction, id, rowNum, value, width,
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: value,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <img
      id={id}
      ref={drag}
      alt={altText}
      className="card"
      style={{
        opacity: isDragging ? 0.5 : 1,
        position: 'absolute',
        top: 15 * rowNum + 'px',
        cursor: direction === 'up' ? 'grab' : 'auto',
      }}
      src={direction === 'down' ? CardBack : OneDiamond}
      width={width}
    />
  );
}

Card.defaultProps = {
  altText: 'image element',
  direction: 'down',
  id: '',
  // draggable: 'false',
  rowNum: 0,
  value: {},
  width: '100%',
};

Card.propTypes = {
  altText: PropTypes.string,
  direction: PropTypes.string,
  id: PropTypes.string,
  // draggable: PropTypes.string,
  rowNum: PropTypes.number,
  value: PropTypes.instanceOf(Object),
  width: PropTypes.string,
};
