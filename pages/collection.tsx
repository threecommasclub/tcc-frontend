import React from 'react';
import Link from 'next/link';
import { Collections, FilterHeader } from '@tcc/components';

type PropsType = { title: string; dummyData: string[] };

const Collection = (props: PropsType) => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 mx-auto">
      <FilterHeader current="collection" title={props.title} />
      <Collections dummyData={props.dummyData} />
    </div>
  );
};

Collection.getInitialProps = async function(props) {
  const title = 'Discovery';
  return {
    title,
    dummyData: [
      'Top 10\nMost Impactful\nAI\nStartups in Toronto',
      'Top 6\nFast Growing\nFintech\nStartups in New York',
      'Top 7\nFast Growing\nFood Tech\nStartups in Vancouver',
    ],
  };
};

export default Collection;
