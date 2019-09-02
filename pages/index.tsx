import React from 'react';

import Button from '../components/buttons/button';
import Header from '../components/header/header';

const Home: React.FC<{}> = () => {
  return (
    <div>
      <Header>TCC</Header>
      <Button>Submit</Button>
    </div>
  );
};

export default Home;
