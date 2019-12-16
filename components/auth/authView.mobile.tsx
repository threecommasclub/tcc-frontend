import React from 'react';
import Menu from './menu/menu.mobile';
import AuthInput from './input/input.mobile';
import Footer from './footer/footer.mobile';

type PropsType = {
  current: string;
};

export const AuthView = (props: PropsType) => (
  <div className="w-full h-full mx-auto">
    <Menu current={props.current} />
    <AuthInput />
    <Footer />
  </div>
);

export default AuthView;
