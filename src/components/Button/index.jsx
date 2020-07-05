import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({ onClick, children, outline, className }) {
  return (
    <button className={classNames('button', className, { 'button--outline': outline })}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
};
