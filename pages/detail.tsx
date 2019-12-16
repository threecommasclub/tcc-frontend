import React from 'react';
import { Detail } from '@tcc/components';
import Router from 'next/router';

type PropsType = { detailProps: {} };

const DetailView = (props: PropsType) => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 mx-auto">
      <p className="font-bold text-lg ml-20 my-20" onClick={() => Router.back()}>
        Go back(temp)
      </p>
      <Detail detailProps={props.detailProps} />
    </div>
  );
};

DetailView.getInitialProps = async function(props) {
  return {
    detailProps: {
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
    },
  };
};

export default DetailView;
