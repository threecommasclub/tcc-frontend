import React from 'react';
import Router from 'next/router';

type PropsType = {
  cities: any;
};

export const CitiesCard = (props: PropsType) => (
  <div className="w-full h-full mx-auto">
    {props.cities.map((city, index) => (
      <div
        key={index}
        className="w-10/12 h-full mx-auto my-4"
        onClick={() =>
          Router.push(`/cities?id=${city.name}`, '/cities-list', {
            query: { name: 'Toronto' },
          })
        }
      >
        <div
          className="p-70 rounded-exlg h-40 relative shadow-md border-gray-300 border"
          style={{ background: `url(${city.img}) 61% 20% no-repeat`, backgroundSize: '113%' }}
        ></div>
        <div>
          <span className="text-lg font-bold text-gray-700 text-2xl">{city.name}</span>
        </div>
        <div>
          <img className="inline mr-1 align-text-bottom fon" src="/Pin.png" alt="location" />
          <span className="text-lg text-indigo-800 font-normal">{city.nation}</span>
        </div>
      </div>
    ))}
  </div>
);

export default CitiesCard;
