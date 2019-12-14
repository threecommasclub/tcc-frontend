import React, { Fragment } from 'react';
import Router from 'next/router';
type PropsType = { current: string; title: string };

export const FilterHeader = (props: PropsType) => (
  <Fragment>
    <div className="">
      <p className="text-gray-500 text-4xl font-bold ml-20 my-60">
        {`{`}
        <span className="text-indigo-700 text-4xl font-bold">{props.title}</span>
        {`}`}
      </p>
    </div>
    <nav className="w-full h-auto mb-30">
      <ul className="w-full h-full border-gray-200 border-b-3 pb-1p">
        <li
          className={`w-1/2 text-center inline-block ${props.current == 'city' ? 'border-b-3 border-indigo-700' : ''}`}
          onClick={() => Router.push('/', '/')}
        >
          <a className={`text-xl font-bold ${props.current == 'city' ? 'text-indigo-700' : 'text-gray-500'}`}>City</a>
        </li>
        <li
          className={`w-1/2 text-center inline-block ${
            props.current == 'collection' ? 'border-b-3 border-indigo-700' : ''
          }`}
          onClick={() => Router.push('/collection?react', '/collection')}
        >
          <a className={`text-xl font-bold ${props.current == 'collection' ? 'text-indigo-700' : 'text-gray-500'}`}>
            Collection
          </a>
        </li>
      </ul>
    </nav>
  </Fragment>
);

export default FilterHeader;
