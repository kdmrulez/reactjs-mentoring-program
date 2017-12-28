import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, buttonStyling, action }) => (
  <button className={buttonStyling} onClick={action}>
    {name}
  </button>
);

Button.propTypes = {
  action: PropTypes.func,
  name: PropTypes.string,
  buttonStyling: PropTypes.string,
};

Button.defaultProps = {
  action: () => {},
  name: 'Button',
  buttonStyling: undefined,
};

export default Button;
