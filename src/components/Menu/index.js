import React from 'react';
import { MdGesture, MdExtension, MdRowing, MdFolder } from 'react-icons/md';

import { Container, LinkMenu } from './styles';

export default function Menu() {
  return (
    <Container>
      <div>
        <div />
        <h2>Guilherme Paitax</h2>
      </div>
      <ul>
        <LinkMenu selected>
          <MdGesture size={24} />
          <span>Sobre</span>
        </LinkMenu>
        <LinkMenu>
          <MdExtension size={24} />
          <span>Conhecimentos</span>
        </LinkMenu>
        <LinkMenu>
          <MdRowing size={24} />
          <span>Experiências</span>
        </LinkMenu>
        <LinkMenu>
          <MdFolder size={24} />
          <span>Projetos</span>
        </LinkMenu>
      </ul>
    </Container>
  );
}
