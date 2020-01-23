import React from 'react';

import { Container, ViewEdit, Color, WhatsApp } from './styles';

import WhatsAppLogo from '~/assets/whatsapp.svg';

export default function Aside() {
  return (
    <Container>
      <ViewEdit>
        <Color color="#3c404a" />
        <Color color="#ffac4a" />
        <Color color="#525afb" />
        <p>Selecione a cor de destaque desejada!</p>
      </ViewEdit>
      <a
        href="https://wa.me/5541997577842?text=Entrar%20em%20contato%20com%20Guilherme%20Paitax"
        title="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp>
          <img draggable="false" src={WhatsAppLogo} alt="Whatsapp logo" />
        </WhatsApp>
      </a>
    </Container>
  );
}
