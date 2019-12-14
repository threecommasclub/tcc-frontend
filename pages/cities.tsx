import React from 'react';
import { CompanyCard, CurationCard } from '@tcc/components';

type PropsType = {
  title: string;
  dummyData: string[];
};

const dummyData = [
  'Top 10\nMost Impactful\nAI\nStartups in Toronto',
  'Top 6\nFast Growing\nFintech\nStartups in New York',
  'Top 7\nFast Growing\nFood Tech\nStartups in Vancouver',
];

const CitiesPage = (props: PropsType) => (
  <div>
    <h1>{props.title}</h1>
    <p>This is Cities Page</p>
    <div>
      <button>Cities</button>
    </div>
    <CurationCard dummyData={dummyData} />
    <CompanyCard name="Rangle.io" address="225 King Street W, Toronto" />
  </div>
);

export default CitiesPage;
