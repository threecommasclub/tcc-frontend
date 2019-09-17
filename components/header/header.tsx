import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => <header className="bg-green-400 text-white p-6">{children}</header>;

export default Header;
