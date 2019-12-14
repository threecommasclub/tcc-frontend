import React from 'react';
import Link from 'next/link';
import { CompanyCard } from '@tcc/components';
import { withRouter } from 'next/router';
import Router from 'next/router';

type PropsType = { title: string; dummyData: string[]; router: any };

const Collection = (props: PropsType) => {
  return (
    <div className="w-full sm:w-full md:w-full h-screen overflow-scroll lg:w-3/4 xl:w-3/4 mx-auto bg-orange-500">
      <p className="font-bold text-lg ml-20 my-20" onClick={() => Router.back()}>
        Go back(temp)
      </p>
      <h1 className="text-white font-bold text-2xl ml-20">{props.router.query.id}</h1>
      <CompanyCard name="Rangle.io" address="225 King Street W, Toronto" />
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

export default withRouter(Collection);
