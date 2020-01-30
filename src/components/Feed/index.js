import React, { useEffect, useRef } from 'react';

import { Container } from './styles';
import About from './About';
import Knowledge from './Knowledge';
import Experiences from './Experiences';
import Projects from './Projects';

export default function Feed() {
  const feedRef = useRef(null);

  useEffect(() => {
    function handleScroll(e) {
      if (feedRef.current && e.srcElement !== feedRef.current) {
        feedRef.current.scrollTop += e.deltaY;
      }
    }

    document.body.addEventListener('mousewheel', handleScroll);

    return () => document.body.removeEventListener('mousewheel', handleScroll);
  }, []);
  return (
    <Container ref={feedRef}>
      <About />
      <Knowledge />
      <Experiences />
      <Projects />
    </Container>
  );
}
