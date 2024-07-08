import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as LogoDarkIcon } from '../../assets/images/logos/elite-dark-icon.svg';
import LogoDarkText from '../../assets/images/logos/logo-text.png';
import { ReactComponent as LogoWhiteIcon } from '../../assets/images/logos/elite-white-icon.svg';
import LogoWhiteText from '../../assets/images/logos/logo-light-text.png';
import shopifyLogoBlack from "../../assets/images/logos/shopifyLogoBlack.webp"
import shopifyLogoGreen from "../../assets/images/logos/shopify logo green.jpg"

const AuthLogo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);

  return (
    <div className="p-4 d-flex justify-content-center gap-2">
      {isDarkMode !== false ? (
        <>
          <LogoWhiteIcon />
          <img src={LogoWhiteText} className="d-none d-lg-block" alt='logo-text' />
        </>
      ) : (
        <div className='d-flex justify-content-center align-items-center gap-2'>
          <h3 className='fs-2 fw-semibold'>Shopify Theme</h3>
          <img src={shopifyLogoBlack} className="d-none d-lg-block w-25 h-75 rounded-circle" alt='logo-text' />
        </div>
      )}
    </div>
  );
};

export default AuthLogo;
