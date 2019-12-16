import React from 'react';
import { Auth, Footer } from '@tcc/components';

type PropsType = { title: string; dummyData: string[] };

const AuthView = (props: PropsType) => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 mx-auto">
      <Auth current="signup" />
      <Footer />
    </div>
  );
};

export default AuthView;
