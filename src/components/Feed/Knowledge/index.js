import React, { useContext, useRef, useEffect, useState } from 'react';

import { Container, DashedBox, CardTechs } from './styles';
import { Title, Index } from '../../GeneralComponents';
import ThemeContext from '../../ThemeContext';
import SectionContext from '../../SectionContext';

export default function Knowledge() {
  const { themeActive } = useContext(ThemeContext);
  const { handleAddSections } = useContext(SectionContext);
  const sectionRef = useRef(null);
  const [techs, setTechs] = useState({
    name: '💻 React JS',
    description:
      'React faz com que a criação de UIs interativas seja uma tarefa fácil. O React atualiza e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.',
    link: 'https://reactjs.org/',
  });

  useEffect(() => {
    const techsArray = [
      {
        name: '💻 React JS',
        description:
          'React faz com que a criação de UIs interativas seja uma tarefa fácil. O React atualiza e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.',
        link: 'https://reactjs.org/',
      },
      {
        name: '🚀 Node JS',
        description:
          'Node.js é um interpretador de JavaScript assíncrono com código aberto ' +
          'orientado a eventos, focado em migrar a programação do Javascript do cliente para os servidores.',
        link: 'https://nodejs.org/en/',
      },
      {
        name: '📱 React Native',
        description:
          'React Native é uma biblioteca Javascript criada pelo Facebook. ' +
          'É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.',
        link: 'https://facebook.github.io/react-native/',
      },
    ];

    let i = 0;
    setInterval(() => {
      setTechs(techsArray[i]);
      if (i === 2) i = 0;
      else i += 1;
    }, 6000);
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      handleAddSections('knowledge', sectionRef.current);
    }
  }, [handleAddSections]);

  return (
    <Container ref={sectionRef} name="knowledge">
      <h1>Conhecimentos</h1>
      <Title>
        <Index themeActive={themeActive}>1</Index>
        <p>Habilidades gerais.</p>
      </Title>
      <DashedBox>
        <span>Node.js</span>
        <span>React.js</span>
        <span>React Native</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>C#</span>
        <span>MVC</span>
        <span>Express</span>
        <span>SQL</span>
        <span>ESLint</span>
        <span>Prettier</span>
        <span>Git</span>
        <span>Bootstrap</span>
        <span>AJAX</span>
        <span>jQuery</span>
        <span>RESTful</span>
        <span>NPM</span>
      </DashedBox>
      <Title>
        <Index themeActive={themeActive}>2</Index>
        <p>Principais tecnologias.</p>
      </Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam illum
        quidem culpa perferendis alias.
      </p>
      <CardTechs style={techs.style}>
        <div>
          <h2>{techs.name}</h2>
          <p>{techs.description}</p>
        </div>
        <a
          href={techs.link}
          title={`Link ${techs.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba Mais
        </a>
      </CardTechs>
    </Container>
  );
}
