import React from "react";
import logo from '../../assets/img/nbn_logo_lk.png';

export const Logo = () => {
  return (
    <picture>
      <img
        className="logo__apple"
        src={logo}
        alt="Full Logo"
        height={'90px'}
        width={'200px'}
      />
    </picture>
  );
};