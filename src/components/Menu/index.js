import React, { useContext } from 'react';
import { MdGesture, MdExtension, MdRowing, MdFolder } from 'react-icons/md';

import { Container, LinkMenu } from './styles';

import ThemeContext from '../ThemeContext';

export default function Menu() {
  const { themeActive } = useContext(ThemeContext);

  return (
    <Container themeActive={themeActive}>
      <div>
        <div />
        <h2>Guilherme Paitax</h2>
      </div>
      <ul>
        <LinkMenu themeActive={themeActive} selected>
          <MdGesture size={24} />
          <span>Sobre</span>
        </LinkMenu>
        <LinkMenu themeActive={themeActive}>
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
