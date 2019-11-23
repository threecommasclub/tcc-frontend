import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => (
  <button className="w-full h-auto py-md text-white font-bold py-2 px-4 rounded">{children}</button>
);

export default Button;
