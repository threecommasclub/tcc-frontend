import React from 'react';
import Router from 'next/router';

export const Footer = () => (
  <footer className="bg-green-400 border-t-2 border-black text-white fixed bottom-0 w-full text-center p-6">
    <ul className="text-center">
      <li className="w-1/4 inline-block" onClick={() => Router.push(`/`)}>
        <a className="text-base">one</a>
      </li>
      <li className="w-1/4 inline-block">
        <a className="text-base">two</a>
      </li>
      <li className="w-1/4 inline-block" onClick={() => Router.push(`/auth`, '/sign-in')}>
        <a className="text-base">three</a>
      </li>
      <li className="w-1/4 inline-block">
        <a className="text-base">four</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
