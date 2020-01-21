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
        <LeftContent>
          <div>
            <h2>
              <span>Guilherme Paitax</span>
              <p>
                Desenvolvedor de <strong>Sistemas</strong>
              </p>
            </h2>
          </div>
        </LeftContent>
        <RightContent>
          <img src={Office} alt="Ilustração no escritório" />
        </RightContent>
      </InitialSection>
    </Container>
  );
}
