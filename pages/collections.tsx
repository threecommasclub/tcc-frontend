import React from 'react';
import Link from 'next/link';
import { CompanyCard } from '@tcc/components';
import { withRouter } from 'next/router';
import Router from 'next/router';

type PropsType = { title: string; dummyData: string[]; router: any; dummyCompany: string[] };

const Collection = (props: PropsType) => {
  return (
    <div className="w-full sm:w-full md:w-full h-screen overflow-scroll lg:w-3/4 xl:w-3/4 mx-auto bg-orange-500">
      <p className="font-bold text-lg ml-20 my-20" onClick={() => Router.back()}>
        Go back(temp)
      </p>
      <h1 className="text-white font-bold text-2xl ml-20">{props.router.query.id}</h1>
      <CompanyCard companyData={props.dummyCompany} />
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
    dummyCompany: [
      { name: 'Rangle.io', address: '255 King Street W, Toronto', tags: ['Fintech', 'Employ Benefit', 'Consulting'] },
      { name: 'Google', address: '177 Linus Rd, Toronto', tags: ['Great Environment', 'Easy apply', 'Great income'] },
      { name: 'Facebook', address: '55 Queens Ave, Toronto', tags: ['Good accessibility', 'Agile', 'Balance'] },
      { name: 'Netflix', address: '572 Bay st', tags: ['Free Movie', 'Tech workshops'] },
      {
        name: 'MicroSoft',
        address: '20224 Pemberton Ave, Toronto',
        tags: ['Fintech', 'Great environment', 'Great income'],
      },
    ],
  };
};

export default withRouter(Collection);
