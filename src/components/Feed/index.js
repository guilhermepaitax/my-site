import React, { useMemo } from 'react';

import { Container, About, Title, Index, ImageCard } from './styles';

export default function Feed() {
  const age = useMemo(() => {
    const diff_ms = Date.now() - new Date('08-25-2000').getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }, []);

  return (
    <Container>
      <About>
        <h1>Introdução</h1>
        <Title>
          <Index>1</Index>
          <p>
            Olá, meu nome é Guilherme Ribeiro Paitax, tenho {age} anos, e sou um
            desenvolvedor de sistemas Fullstack vivendo atualmente em{' '}
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
        <ImageCard />
      </About>
    </Container>
  );
}
