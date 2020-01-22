import React from 'react';

import { Container, ViewEdit, Color } from './styles';

export default function Aside() {
  return (
    <Container>
      <ViewEdit>
        <Color color="#3c404a" />
        <Color color="#ffac4a" />
        <Color color="#525afb" />
        <p>Selecione a cor de destaque desejada!</p>
      </ViewEdit>
    </Container>
  );
}
