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
                <strong>Centro Universitario Unibrasil</strong>
              </div>
            </AcademicTitle>
            <AcademicInfo>
              <p>Bacharelado em Sistemas de Informação.</p>
              <p>
                Tecnologia em Tecnologia da Informação/Sistemas da Informação.
              </p>
              <p>2018/2021.</p>
            </AcademicInfo>
            <AcademicTitle>
              <FaSchool size={32} />
              <div>
                <strong>SENAI</strong>
              </div>
            </AcademicTitle>
            <AcademicInfo>
              <p>
                Curso Técnico em Informática do SENAI com foco em
                desenvolvimento de sistemas.
              </p>
            </AcademicInfo>
            <AcademicTitle>
              <FaGraduationCap size={32} />
              <div>
                <strong>Rocketseat</strong>
              </div>
            </AcademicTitle>
            <AcademicInfo>
              <p>Go Stack.</p>
            </AcademicInfo>
          </div>
        </AcademicEducation>
        <Title>
          <Index>3</Index>
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
          <span>Express</span>
          <span>SQL</span>
          <span>ESLint</span>
          <span>Prettier</span>
          <span>Git</span>
          <span>Bootstrap</span>
          <span>AJAX</span>
          <span>jQuery</span>
          <span>RESTful</span>
        </DashedBox>
      </About>
    </Container>
  );
}
