import React from 'react';
import ninjaOneLogo from '@assets/ninjaOneLogo.svg';

const Header = () => {
  return (
    <div className="py-3 pl-6 bg-banner">
      <img src={ninjaOneLogo} alt="ninja one logo" />
    </div>
  );
};

export default Header;
