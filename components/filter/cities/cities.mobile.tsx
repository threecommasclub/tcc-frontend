import React, { Fragment } from 'react';
import toronto from '../../../static/toronto-pic.png';
import vancouver from '../../../static/vancouver-pic.png';
import newyork from '../../../static/newyork-pic.png';
import Pin from '../../../static/Pin.png';

const cities = [
  { name: 'Toronto', img: toronto, nation: 'Canada' },
  { name: 'Vancouver', img: vancouver, nation: 'Canada' },
  { name: 'Newyork', img: newyork, nation: 'United States' },
];

export const CitiesCard = () => (
  <div className="w-full h-full mx-auto">
    {cities.map((city, index) => (
      <div key={index} className="w-10/12 h-full mx-auto my-4">
        <div
          className="p-5 rounded-exlg h-40 relative shadow-md border-gray-300 border"
          style={{ background: `url(${city.img}) 61% 20% no-repeat`, backgroundSize: '113%' }}
        ></div>
        <div>
          <span className="text-lg font-bold text-gray-700 text-2xl">{city.name}</span>
        </div>
        <div>
          <img className="inline mr-1 align-text-bottom fon" src={Pin} alt="location" />
          <span className="text-lg text-indigo-800 font-normal">{city.nation}</span>
        </div>
      </div>
    ))}
  </div>
);

export default CitiesCard;
