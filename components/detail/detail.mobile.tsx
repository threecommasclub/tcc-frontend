import React from 'react';
import Map from '../map/map';

type PropsType = {
  detailProps: any;
};

const detailProps = {
  name: 'Rangle.io',
  address: '255 King Street W, Toronto',
  logo: '',
  tags: ['Fintech', 'Employ Benefit', 'Consulting'],
  description:
    'A company is called Rangle.io. blahblahblahblah blahblah blahblahblahblah blahblahblahblah blahblahblahblahblahblah blahblah a blahblah blahblahblahblah an blahblah the blahblahblahblahblahblah a blahblah.',
  mapInfo: {
    latitude: 43.642,
    longitude: -79.3892,
    width: 400,
    height: 400,
    zoom: 10,
  },
};

export const DetailView = (props: PropsType) => (
  <div className="w-full h-full mx-auto p-20">
    <div className="rounded-full bg-gray-600 w-60 h-60 shadow-md ">
      <img src={detailProps.logo} />
    </div>
    <h1 className="font-bold text-2xl text-gray-500 my-20">{detailProps.name}</h1>
    <h3 className="text-base text-gray-400 my-20">{detailProps.address}</h3>
    <p className="my-20">{detailProps.description}</p>
    <div className="border-2 border-blue-400">
      <Map
        latitude={detailProps.mapInfo.latitude}
        longitude={detailProps.mapInfo.longitude}
        width={detailProps.mapInfo.width}
        height={detailProps.mapInfo.height}
        zoom={detailProps.mapInfo.zoom}
      />
    </div>
  </div>
);

export default DetailView;
