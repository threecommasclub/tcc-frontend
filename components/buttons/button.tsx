import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{children}</button>
);

export default Button;
