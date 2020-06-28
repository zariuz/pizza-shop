import React from 'react';
import classNames from 'classnames';

export default function Button({ onClick, children, outline, className }) {
  return (
    <button className={classNames('button', className, { 'button--outline': outline })}>
      {children}
    </button>
  );
}
