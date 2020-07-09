import React, { useState, useCallback } from 'react';

import { Container } from './styles';
import Menu from '~/components/Menu';
import Feed from '~/components/Feed';
import Aside from '~/components/Aside';
import ThemeContext from '~/components/ThemeContext';
import SectionContext from '~/components/SectionContext';

export default function Home() {
  const [themeActive, setThemeActive] = useState('primary');
  const [sections, setSections] = useState([]);

  function handleChangeTheme(theme) {
    setThemeActive(theme);
  }

  const handleAddSections = useCallback((name, ref) => {
    setSections(oldValue => [...oldValue, { name, ref }]);
  }, []);

  return (
    <Container>
      <ThemeContext.Provider value={{ themeActive, handleChangeTheme }}>
        <SectionContext.Provider value={{ sections, handleAddSections }}>
          <Menu />
          <Feed />
          <Aside />
        </SectionContext.Provider>
      </ThemeContext.Provider>
    </Container>
  );
}
