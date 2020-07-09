import React, { useContext, useEffect, useState } from 'react';
import { MdGesture, MdExtension, MdRowing, MdFolder } from 'react-icons/md';

import { Container, LinkMenu } from './styles';

import ThemeContext from '../ThemeContext';
import SectionContext from '../SectionContext';

export default function Menu() {
  const { themeActive } = useContext(ThemeContext);
  const { sections } = useContext(SectionContext);
  const [selected, setSelected] = useState('about');

  function handleGoToSection(name) {
    const section = sections.find(s => s.name === name);

    if (section) {
      section.ref.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.attributes.name.value);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach(section => {
      observer.observe(section.ref, section.name);
    });
  }, [sections]);

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
          selected={selected === 'about'}
        >
          <MdGesture size={24} />
          <span>Sobre</span>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleGoToSection('knowledge')}
          themeActive={themeActive}
          selected={selected === 'knowledge'}
        >
          <MdExtension size={24} />
          <span>Conhecimentos</span>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleGoToSection('experiences')}
          themeActive={themeActive}
          selected={selected === 'experiences'}
        >
          <MdRowing size={24} />
          <span>Experiências</span>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleGoToSection('projects')}
          themeActive={themeActive}
          selected={selected === 'projects'}
        >
          <MdFolder size={24} />
          <span>Projetos</span>
        </LinkMenu>
      </ul>
    </Container>
  );
}
