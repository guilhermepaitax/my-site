import React, { useContext, useRef, useEffect, useState } from 'react';

import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { Container, Carousel, Project, Button } from './styles';
import { Title, Index } from '../../GeneralComponents';
import ThemeContext from '../../ThemeContext';
import SectionContext from '../../SectionContext';

import ImageProject2 from '~/assets/computer2.jpg';
import ImageProject from '~/assets/computer.jpg';
import ImageProject3 from '~/assets/computer.png';

const projects = [
  {
    background: ImageProject2,
    title: 'Music Player UI',
    url: 'https://github.com/guilhermepaitax/juno-landing-page',
  },
  {
    background: ImageProject,
    title: 'App Bank Bitcoin',
    url: 'https://github.com/guilhermepaitax/juno-landing-page',
  },
  {
    background: ImageProject3,
    title: 'Dark Web App',
    url: 'https://github.com/guilhermepaitax/juno-landing-page',
  },
];

export default function Projects() {
  const { themeActive } = useContext(ThemeContext);
  const { handleAddSections } = useContext(SectionContext);
  const sectionRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      handleAddSections('projects', sectionRef.current);
    }
  }, [handleAddSections]);

  function handleSlideProject(action) {
    if (action === 'next') {
      projects.length - 1 === currentProject
        ? setCurrentProject(0)
        : setCurrentProject(currentProject + 1);
    } else if (action === 'prev') {
      currentProject === 0
        ? setCurrentProject(projects.length - 1)
        : setCurrentProject(currentProject - 1);
    }
  }

  return (
    <Container ref={sectionRef} name="projects">
      <h1>Projetos</h1>
      <Title>
        <Index themeActive={themeActive}>1</Index>
        <p>Meus Projetos.</p>
      </Title>
      <Carousel>
        <Project background={projects[currentProject].background}>
          <Button
            type="button"
            onClick={() => handleSlideProject('next')}
            side="next"
          >
            <FaChevronRight color="#fff" />
          </Button>
          <Button
            type="button"
            onClick={() => handleSlideProject('prev')}
            side="prev"
          >
            <FaChevronLeft color="#fff" />
          </Button>
          <div>
            <span>{projects[currentProject].title}</span>
            <a href={projects[currentProject].url} title="Acessar Projeto">
              <FaExternalLinkAlt size={18} color="#fff" />
            </a>
          </div>
        </Project>
      </Carousel>
    </Container>
  );
}
