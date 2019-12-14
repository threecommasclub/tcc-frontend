import React from 'react';
import { CompanyCard, CurationCard } from '@tcc/components';
import { withRouter } from 'next/router';
import Router from 'next/router';

type PropsType = {
  title: string;
  dummyData: string[];
  router: any;
};

const dummyData = [
  'Top 10\nMost Impactful\nAI\nStartups in Toronto',
  'Top 6\nFast Growing\nFintech\nStartups in New York',
  'Top 7\nFast Growing\nFood Tech\nStartups in Vancouver',
];

const CitiesPage = (props: PropsType) => (
  <div>
    <p className="font-bold text-lg ml-20 my-20" onClick={() => Router.back()}>
      Go back(temp)
    </p>
    <h1 className="text-gray-500 font-bold text-4xl ml-20">{props.router.query.id}</h1>
    <CurationCard dummyData={dummyData} />
    <CompanyCard name="Rangle.io" address="225 King Street W, Toronto" />
  </div>
);

export default withRouter(CitiesPage);
