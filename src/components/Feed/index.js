import React from 'react';
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
  About,
  Title,
  Index,
  SocialLinks,
  AboutText,
  AcademicEducation,
  AcademicTitle,
  AcademicInfo,
  DashedBox,
  Knowledge,
} from './styles';

export default function Feed() {
  return (
    <Container>
      <About>
        <h1>Introdução</h1>
        <Title>
          <Index>1</Index>
          <p>
            Quem é Guilherme Ribeiro Paitax.
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com.br/maps/place/Curitiba+-+PR"
            >
              Curitiba
            </a> */}
          </p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            error a in ratione nam iusto, voluptas alias earum id beatae. Ad
            cumque harum consequatur molestias voluptates voluptas beatae quis
            rem.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            error a in ratione nam iusto, voluptas alias earum id beatae. Ad
            cumque harum consequatur molestias voluptates voluptas beatae quis
            rem.
          </p>
        </AboutText>
        <Title>
          <Index>2</Index>
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
                Curso Técnico em Informática do SENAI com foco em
                desenvolvimento de sistemas web e desktop.
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
                automatizados, integração contínua, publicação nas stores, e
                todas as bibliotecas e frameworks importantes.
              </p>
              <span>2019 até 2020</span>
            </AcademicInfo>
          </div>
        </AcademicEducation>
      </About>
      <Knowledge>
        <h1>Conhecimentos</h1>
        <Title>
          <Index>1</Index>
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
      </Knowledge>
    </Container>
  );
}