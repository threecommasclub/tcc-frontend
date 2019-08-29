import React from 'react';

import Button from '../components/buttons/button';

const Home: React.FC<{}> = () => {
  return (
    <div>
      <h1 className="bg-red-400 text-white p-6">TCC</h1>
      <Button>Submit</Button>
    </div>
  );
};

export default Home;
