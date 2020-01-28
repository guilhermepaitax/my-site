import React, { useContext, useRef, useEffect } from 'react';

import { Container } from './styles';
import { Title, Index } from '../../GeneralComponents';
import ThemeContext from '../../ThemeContext';
import SectionContext from '../../SectionContext';

export default function Projects() {
  const { themeActive } = useContext(ThemeContext);
  const { handleAddSections } = useContext(SectionContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      handleAddSections('projects', sectionRef.current);
    }
  }, [handleAddSections]);

  return (
    <Container ref={sectionRef} name="projects">
      <h1>Projetos</h1>
      <Title>
        <Index themeActive={themeActive}>1</Index>
        <p>Meus Projetos.</p>
      </Title>
    </Container>
  );
}
