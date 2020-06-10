import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import logoDark from '../../assets/logoDark.svg';
import { useTheme } from '../../hooks/theme';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const [windowPath, setWindowPath] = useState('');

  useEffect(() => {
    setWindowPath(window.location.pathname);
  }, []);

  return (
    <HeaderContainer>
      <img
        src={theme.title === 'dark' ? logoDark : logo}
        width="215px"
        alt="github viewer"
      />
      <div>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor="#ccc"
          onColor="#333"
        />
        {windowPath !== '/' && <Link to="/">Voltar</Link>}
      </div>
    </HeaderContainer>
  );
};

export default Header;
