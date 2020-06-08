import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  const [windowPath, setWindowPath] = useState('');

  useEffect(() => {
    setWindowPath(window.location.pathname);
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} width="215px" alt="github viewer" />
      {windowPath !== '/' && <Link to="/">Voltar</Link>}
    </HeaderContainer>
  );
};

export default Header;
