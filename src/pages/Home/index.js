import React from 'react';

import { Container } from './styles';
import Menu from '~/components/Menu';
import Feed from '~/components/Feed';

export default function Home() {
  return (
    <Container>
      <Menu />
      <Feed />
    </Container>
  );
}
