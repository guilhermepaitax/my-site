import React, { useContext, useRef, useEffect } from 'react';

import { Container } from './styles';
import { Title, Index } from '../../GeneralComponents';
import ThemeContext from '../../ThemeContext';
import SectionContext from '../../SectionContext';

export default function Experiences() {
  const { themeActive } = useContext(ThemeContext);
  const { handleAddSections } = useContext(SectionContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      handleAddSections('experiences', sectionRef.current);
    }
  }, [handleAddSections]);

  return (
    <Container ref={sectionRef} name="experiences">
      <h1>Experiências</h1>
      <Title>
        <Index themeActive={themeActive}>1</Index>
        <p>Minhas Experiências.</p>
      </Title>
    </Container>
  );
}
