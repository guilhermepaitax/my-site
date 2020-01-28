import React from 'react';

import { Container } from './styles';
import About from './About';
import Knowledge from './Knowledge';
import Experiences from './Experiences';
import Projects from './Projects';

export default function Feed() {
  return (
    <Container>
      <About />
      <Knowledge />
      <Experiences />
      <Projects />
    </Container>
  );
}
