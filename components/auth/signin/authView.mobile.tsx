import React from 'react';
import Button from '../../buttons/button';

export const AuthView = () => (
  <div className="w-full h-full mx-auto">
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

    <div className="my-12">
      <div className="">
        <label>
          <a className="text-lg text-gray-600 font-bold">Email</a>
        </label>
        <div className="h-3 w-full"></div> {/* space */}
        <div className="border-indigo-700 border-b-2 py-sm">
          <input
            className="placeholder-gray-500 text-lg w-full focus:outline-none text-indigo-700 font-bold"
            placeholder="Enter Email"
          />
        </div>
      </div>
      <div className="h-8 w-full"></div> {/* space */}
      <div className="">
        <label>
          <a className="text-lg text-gray-600 font-bold">Password</a>
        </label>
        <div className="h-3 w-full"></div> {/* space */}
        <div className="border-indigo-700 border-b-2 py-sm">
          <input
            className="placeholder-gray-500 text-lg w-full focus:outline-none text-indigo-700 font-bold"
            placeholder="Enter Password"
          />
        </div>
      </div>
    </div>

    <div className="w-full">
      {/* stProps="bg-indigo-700 hover:hover:bg-blue-700" */}
      <Button>Sign In</Button>

      <div>
        <a>Forgot Password?</a>
      </div>

      <footer>
        <a>or sign in with</a>
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
  </div>
);

export default AuthView;
