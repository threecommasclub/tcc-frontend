import React from 'react';
import Link from 'next/link';
import { Cities, FilterHeader } from '@tcc/components';

type PropsType = { title: string; cities: string[] };

const Home = (props: PropsType) => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 mx-auto">
      <FilterHeader current="city" title={props.title} />
      <Cities cities={props.cities} />
    </div>
  );
};

Home.getInitialProps = async function(props) {
  const title = 'Discovery';
  return {
    title,
    cities: [
      { name: 'Toronto', img: '/toronto-pic.png', nation: 'Canada' },
      { name: 'Vancouver', img: '/vancouver-pic.png', nation: 'Canada' },
      { name: 'Newyork', img: '/newyork-pic.png', nation: 'United States' },
    ],
  };
};

export default Home;
