import React from 'react';
import './style.scss';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button onClick={props.onClick} className="Button">{props.text}</button>
  );
};

Button.defaultProps = {
  onClick: () => void 0,
} as Partial<ButtonProps>;
