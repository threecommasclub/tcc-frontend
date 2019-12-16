import React from 'react';
import { CompanyCard, CurationCard } from '@tcc/components';
import { withRouter } from 'next/router';
import Router from 'next/router';

type PropsType = {
  title: string;
  dummyData: string[];
  router: any;
  dummyCompany: string[];
};

const dummyData = [
  'Top 10\nMost Impactful\nAI\nStartups in Toronto',
  'Top 6\nFast Growing\nFintech\nStartups in New York',
  'Top 7\nFast Growing\nFood Tech\nStartups in Vancouver',
];

const dummyCompany = [
  { name: 'Rangle.io', address: '255 King Street W, Toronto', tags: ['Fintech', 'Employ Benefit', 'Consulting'] },
  { name: 'Google', address: '177 Linus Rd, Toronto', tags: ['Great Environment', 'Easy apply', 'Great income'] },
  { name: 'Facebook', address: '55 Queens Ave, Toronto', tags: ['Good accessibility', 'Agile', 'Balance'] },
  { name: 'Netflix', address: '572 Bay st', tags: ['Free Movie', 'Tech workshops'] },
  {
    name: 'MicroSoft',
    address: '20224 Pemberton Ave, Toronto',
    tags: ['Fintech', 'Great environment', 'Great income'],
  },
];

const CitiesPage = (props: PropsType) => (
  <div>
    <p className="font-bold text-lg ml-20 my-20" onClick={() => Router.back()}>
      Go back(temp)
    </p>
    <h1 className="text-gray-500 font-bold text-4xl ml-20">{props.router.query.id}</h1>
    <CurationCard dummyData={dummyData} />
    <CompanyCard companyData={dummyCompany} />
  </div>
);

export default withRouter(CitiesPage);
