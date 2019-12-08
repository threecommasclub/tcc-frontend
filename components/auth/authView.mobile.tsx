import React from 'react';
import Menu from './menu/menu.mobile';
import AuthInput from './input/input.mobile';
import Footer from './footer/footer.mobile';

const pizzaClick = () => console.log('pizza!');

export const AuthView = () => (
  <div className="w-full h-full mx-auto">
    <Menu click={pizzaClick} />
    <AuthInput />
    <Footer />
  </div>
);

export default AuthView;
