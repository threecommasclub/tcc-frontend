import React from 'react';

import Button from '../components/buttons/button';
import Header from '../components/header/header';
import CompanyCard from '../components/companyCard/companyCard';

const Home: React.FC<{}> = () => {
  return (
    <div>
      <Header>TCC</Header>
      <CompanyCard>title</CompanyCard>
      {/* <Button>Submit</Button> */}
    </div>
  );
};

export default Home;
