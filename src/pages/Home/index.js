import React from 'react';

import {
  Container,
  InitialSection,
  BlockGradient,
  LeftContent,
  RightContent,
} from './styles';
import Menu from '~/components/Menu';

import Office from '~/assets/icon-on-the-office.svg';

export default function Home() {
  return (
    <Container>
      <Menu />
      <InitialSection>
        <BlockGradient />
        <LeftContent />
        <RightContent>
          <img src={Office} alt="Ilustração no escritório" />
        </RightContent>
      </InitialSection>
    </Container>
  );
}
