import React, { useState } from 'react';

import { Container } from './styles';
import Menu from '~/components/Menu';
import Feed from '~/components/Feed';
import Aside from '~/components/Aside';
import ThemeContext from '~/components/ThemeContext';

export default function Home() {
  const [themeActive, setThemeActive] = useState('primary');

  function handleChangeTheme(theme) {
    setThemeActive(theme);
  }

  return (
    <Container>
      <ThemeContext.Provider value={{ themeActive, handleChangeTheme }}>
        <Menu />
        <Feed />
        <Aside />
      </ThemeContext.Provider>
    </Container>
  );
}
