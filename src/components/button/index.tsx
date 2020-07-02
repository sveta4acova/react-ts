import React from 'react';
import './style.scss';

export interface ButtonProps {
  text: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className="Button">{props.text}</button>
  );
}
