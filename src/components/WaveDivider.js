import React from 'react';
import PropTypes from 'prop-types';
import waveDivider from '../assets/wave-divider.svg';

const WaveDivider = ({ alt = 'Wave section divider', className = '' }) => (
  <img
    src={waveDivider}
    alt={alt}
    className={`wave-svg ${className}`}
    loading="lazy"
    style={{ zIndex: 1, position: 'relative' }}
  />
);

WaveDivider.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default WaveDivider; 