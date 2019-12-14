import React from 'react';

export const Menu = () => (
  <nav className="w-full h-auto">
    <ul className="w-full h-full border-gray-200 border-b-3 pb-1p">
      <li className="w-1/2 text-center inline-block border-b-3 border-indigo-700">
        <a className="text-xl font-bold text-indigo-700">Sign In</a>
      </li>
      <li className="w-1/2 text-center inline-block">
        <a className="text-xl font-bold text-gray-500">Sign Up</a>
      </li>
    </ul>
  </nav>
);

export default Menu;
