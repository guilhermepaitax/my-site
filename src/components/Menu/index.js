import React, { useContext } from 'react';
import { MdGesture, MdExtension, MdRowing, MdFolder } from 'react-icons/md';

import { Container, LinkMenu } from './styles';

import ThemeContext from '../ThemeContext';
import SectionContext from '../SectionContext';

export default function Menu() {
  const { themeActive } = useContext(ThemeContext);
  const { sections } = useContext(SectionContext);

  function handleGoToSection(name) {
    const section = sections.find(s => s.name === name);

    if (section) {
      section.ref.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Container themeActive={themeActive}>
      <div>
        <div />
        <h2>Guilherme Paitax</h2>
      </div>
      <ul>
        <LinkMenu
          onClick={() => handleGoToSection('about')}
          themeActive={themeActive}
          selected
        >
          <MdGesture size={24} />
          <span>Sobre</span>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleGoToSection('knowledge')}
          themeActive={themeActive}
        >
          <MdExtension size={24} />
          <span>Conhecimentos</span>
        </LinkMenu>
        <LinkMenu themeActive={themeActive}>
          <MdRowing size={24} />
          <span>Experiências</span>
        </LinkMenu>
        <LinkMenu themeActive={themeActive}>
          <MdFolder size={24} />
          <span>Projetos</span>
        </LinkMenu>
      </ul>
    </Container>
  );
}
