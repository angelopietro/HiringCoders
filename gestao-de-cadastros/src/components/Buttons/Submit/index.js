import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './style';

export default function Submit({ color, children }) {
  return <Button color={color} type="submit">{children}</Button>;
}

Submit.propTypes = {
    color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Submit.defaultProps = {
  color: '#1C1C1C'
}
