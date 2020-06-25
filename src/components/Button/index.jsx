import React from 'react';
import classNames from 'classnames';

export default function Button({ children, outline }) {
  return (
    <button className={classNames('button', { 'button--outline': outline })}>{children}</button>
  );
}
