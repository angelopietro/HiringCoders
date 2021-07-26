import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './style';

export default function Gobal({ color, onClick, children }) {
  return (
    <Button color={color} onClick={onClick} type="button">
         {children}
     </Button>
  );
}

Gobal.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};

Gobal.defaultProps = {
  color: '#1C1C1C',
  onClick() {},
};
