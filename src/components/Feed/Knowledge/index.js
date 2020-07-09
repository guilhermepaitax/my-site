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
        <span>TypeScript</span>
        <span>C#</span>
        <span>Java</span>
        <span>MVC</span>
        <span>Data Structure</span>
        <span>Express</span>
        <span>SQL</span>
        <span>PostgreSQL</span>
        <span>Microsoft SQL Server</span>
        <span>MySQL</span>
        <span>MongoDB</span>
        <span>Socket.io</span>
        <span>ESLint</span>
        <span>Prettier</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>GitLab</span>
        <span>Bootstrap</span>
        <span>AJAX</span>
        <span>jQuery</span>
        <span>RESTful</span>
        <span>NPM</span>
        <span>Insomnia</span>
        <span>Babel</span>
        <span>Webpack</span>
        <span>Styled Components</span>
        <span>Axios</span>
        <span>DDD</span>
        <span>SOLID</span>
        <span>Jest</span>
        <span>JWT</span>
        <span>Multer</span>
        <span>Docker</span>
        <span>VS Code</span>
        <span>Visual Studio IDE</span>
        <span>Eclipse IDE</span>
      </DashedBox>
      <Title>
        <Index themeActive={themeActive}>2</Index>
        <p>Principais tecnologias.</p>
      </Title>
      <p>
        Tenho maior conhecimento e interesse em tecnologias ligadas ao meio web
        e mobile, como NodeJS, ReactJS e React Native. O que não significa que
        não esteja sempre de olho em outras áreas, estou sempre aberto a
        aprender coisas novas.
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
