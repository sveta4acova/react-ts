import React from 'react';
import './style.scss';

export interface ButtonProps {
  text: string;
  onClick?(): void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className="Button">{props.text}</button>
  );
}

Button.defaultProps = {
  onClick: () => {},
} as Partial<ButtonProps>;
