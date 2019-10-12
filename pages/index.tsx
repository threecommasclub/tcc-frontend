import React from 'react';

import { Header, CompanyCard } from '@tcc/components';

const props = {
  name: 'companyUsing',
  date: '11th Oct 2019',
  address: '177 linus rd, North York',
};

const Home = () => {
  return (
    <div>
      <Header>This is Landing Page</Header>
      <p>Please use /react page for implementing the project</p>
      <CompanyCard {...props} />
    </div>
  );
};

export default Home;
