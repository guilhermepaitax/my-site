import React, { useContext, useRef, useEffect } from 'react';

import {
  FaGithub,
  FaLinkedinIn,
  FaGitlab,
  FaUniversity,
  FaSchool,
  FaGraduationCap,
} from 'react-icons/fa';

import {
  Container,
  SocialLinks,
  AboutText,
  AcademicEducation,
  AcademicTitle,
  AcademicInfo,
} from './styles';
import { Title, Index } from '../../GeneralComponents';
import ThemeContext from '../../ThemeContext';
import SectionContext from '../../SectionContext';

export default function About() {
  const { themeActive } = useContext(ThemeContext);
  const { handleAddSections } = useContext(SectionContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      handleAddSections('about', sectionRef.current);
    }
  }, [handleAddSections]);

  return (
    <Container ref={sectionRef}>
      <h1>Introdução</h1>
      <Title>
        <Index themeActive={themeActive}>1</Index>
        <p>Quem é Guilherme Ribeiro Paitax.</p>
      </Title>
      <SocialLinks>
        <a
          href="https://github.com/guilhermepaitax"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/guilhermepaitax/"
          title="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={32} />
        </a>
        <a
          href="https://gitlab.com/guilherme_paitax"
          title="Gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGitlab size={32} />
        </a>
      </SocialLinks>
      <AboutText>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error
          a in ratione nam iusto, voluptas alias earum id beatae. Ad cumque
          harum consequatur molestias voluptates voluptas beatae quis rem.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error
          a in ratione nam iusto, voluptas alias earum id beatae. Ad cumque
          harum consequatur molestias voluptates voluptas beatae quis rem.
        </p>
      </AboutText>
      <Title>
        <Index themeActive={themeActive}>2</Index>
        <p>Formação acadêmica.</p>
      </Title>
      <AcademicEducation>
        <div>
          <AcademicTitle>
            <FaUniversity size={32} />
            <div>
              <strong>UniBrasil Centro Universitário</strong>
            </div>
          </AcademicTitle>
          <AcademicInfo>
            <p>
              <strong>Bacharelado em Sistemas de Informação.</strong>
              <br />O curso de Sistemas de Informação tem por objetivo geral a
              formação básica sólida em Ciência da Computação, Matemática e
              Sistemas de Informação, enfatizando aspectos científicos,
              técnicos, humanos e sociais, para atuarem em gestão,
              desenvolvimento, uso e avaliação de tecnologias de informação
              aplicadas nas organizações.
            </p>
            <span>2018 até 2021</span>
          </AcademicInfo>
          <AcademicTitle>
            <FaSchool size={32} />
            <div>
              <strong>SENAI</strong>
            </div>
          </AcademicTitle>
          <AcademicInfo>
            <p>
              <strong>Curso Técnico de Informática.</strong>
              <br />
              Curso Técnico em Informática do SENAI com foco em desenvolvimento
              de sistemas web e desktop.
            </p>
            <span>2016 até 2017</span>
          </AcademicInfo>
          <AcademicTitle>
            <FaGraduationCap size={32} />
            <div>
              <strong>Rocketseat</strong>
            </div>
          </AcademicTitle>
          <AcademicInfo>
            <p>
              <strong>Go Stack.</strong>
              <br />O GoStack é um treinamento online, prático e intensivo, no
              formato de bootcamp. No GoStack o aluno vai a fundo nas
              tecnologias NodeJS, ReactJS e React Native, e todo o ecossistema
              ao redor dessas ferramentas, do zero ao deploy. Incluindo testes
              automatizados, integração contínua, publicação nas stores, e todas
              as bibliotecas e frameworks importantes.
            </p>
            <span>2019 até 2020</span>
          </AcademicInfo>
        </div>
      </AcademicEducation>
    </Container>
  );
}
