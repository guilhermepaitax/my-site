import React from 'react';

import {
  Container,
  About,
  Title,
  Index,
  ViewEdit,
  Color,
  AboutText,
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
            Olá, meu nome é Guilherme Ribeiro Paitax, sou um desenvolvedor de
            sistemas Fullstack vivendo atualmente em{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com.br/maps/place/Curitiba+-+PR"
            >
              Curitiba
            </a>
            .
          </p>
        </Title>
        <ViewEdit>
          <div>
            <Color color="#262626" />
            <Color color="#ffdfb9" />
            <Color color="#fdce96" />
            <p>Selecione a cor de destaque desejada!</p>
          </div>
        </ViewEdit>
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
          <p>Meus principais interesses.</p>
        </Title>
        <DashedBox>
          <span>Netflix</span>
          <span>Nubank</span>
          <span>Futebol</span>
          <span>Jogos de Video Game</span>
          <span>Desenvolvimento</span>
          <span>Tecnologias</span>
        </DashedBox>
      </About>
    </Container>
  );
}
