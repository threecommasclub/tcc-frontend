import React from 'react';
import Button from '../../buttons/button';

export const Footer = () => (
  <div className="w-full">
    <Button stProps="bg-indigo-700 hover:hover:bg-blue-500 w-full h-auto py-md text-white font-bold py-2 px-4 rounded mb-20">
      Sign In
    </Button>

    <div className="w-full text-right mb-20">
      <a className="text-blue-600 font-bold text-xl">Forgot Password?</a>
    </div>

    <footer className="w-full text-center">
      <a className="font-medium text-lg text-gray-700">or sign in with</a>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </footer>
  </div>
);

export default Footer;
