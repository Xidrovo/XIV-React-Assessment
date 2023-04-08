import React from 'react';
import ninjaOneLogo from '@assets/ninjaOneLogo.svg';

const Header = () => {
  return (
    <h1 className="py-3 pl-6 bg-banner">
      <img src={ninjaOneLogo} alt="ninja one logo" />
    </h1>
  );
};

export default Header;
