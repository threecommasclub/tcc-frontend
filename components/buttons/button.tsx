import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  stProps: string;
};

export const Button = ({ children, stProps }: ButtonProps) => <button className={stProps}>{children}</button>;

export default Button;
