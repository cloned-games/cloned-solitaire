import React from 'react';
import PropTypes from 'prop-types';
import './OpenPile.css';

export default function OpenPile({ deck }) {
  return (
    <div className="open-pile" />
  );
}

OpenPile.defaultProps = {
  deck: [],
};

OpenPile.propTypes = {
  deck: PropTypes.instanceOf(Array),
};
