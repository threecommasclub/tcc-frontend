import React from 'react';
import Router from 'next/router';

type PropsType = { current: string };

export const Menu = (props: PropsType) => (
  <nav className="w-full h-auto">
    <ul className="w-full h-full border-gray-200 border-b-3 pb-1p">
      <li
        className={`w-1/2 text-center inline-block ${props.current == 'signin' ? 'border-b-3 border-indigo-700' : ''}`}
        onClick={() => Router.push(`/auth`, '/sign-in')}
      >
        <a className={`text-xl font-bold ${props.current == 'signin' ? 'text-indigo-700' : 'text-gray-500'}`}>
          Sign In
        </a>
      </li>
      <li
        className={`w-1/2 text-center inline-block ${props.current == 'signup' ? 'border-b-3 border-indigo-700' : ''}`}
        onClick={() => Router.push(`/signup`, '/sign-up')}
      >
        <a className={`text-xl font-bold ${props.current == 'signup' ? 'text-indigo-700' : 'text-gray-500'}`}>
          Sign Up
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;
