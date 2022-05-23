import React, { FC, SyntheticEvent, ButtonHTMLAttributes } from 'react';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export type Props = InferProps<typeof propTypes> & {
  onClick: (e: SyntheticEvent) => void,
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
};

const Button: FC<Props> = ({ children, onClick, type }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
