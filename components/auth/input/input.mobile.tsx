import React from 'react';

export const AuthInput = () => (
  <div className="my-50">
    <div className="">
      <label>
        <a className="text-lg text-gray-600 font-bold">Email</a>
      </label>
      <div className="h-10 w-full"></div> {/* space */}
      <div className="border-indigo-700 border-b-2 py-sm">
        <input
          className="placeholder-gray-500 text-lg w-full focus:outline-none text-indigo-700 font-bold"
          placeholder="Enter Email"
        />
      </div>
    </div>
    <div className="h-20 w-full"></div> {/* space */}
    <div className="">
      <label>
        <a className="text-lg text-gray-600 font-bold">Password</a>
      </label>
      <div className="h-10 w-full"></div> {/* space */}
      <div className="border-indigo-700 border-b-2 py-sm">
        <input
          className="placeholder-gray-500 text-lg w-full focus:outline-none text-indigo-700 font-bold"
          placeholder="Enter Password"
        />
      </div>
    </div>
  </div>
);

export default AuthInput;
