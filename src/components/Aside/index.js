import React, { useContext } from 'react';

import { Container, ViewEdit, Color, WhatsApp } from './styles';

import ThemeContext from '../ThemeContext';
import WhatsAppLogo from '~/assets/whatsapp.svg';

export default function Aside() {
  const { themeActive, handleChangeTheme } = useContext(ThemeContext);

  return (
    <Container themeActive={themeActive}>
      <ViewEdit>
        <Color onClick={() => handleChangeTheme('dark')} color="#3c404a" />
        <Color onClick={() => handleChangeTheme('secundary')} color="#ffac4a" />
        <Color onClick={() => handleChangeTheme('primary')} color="#525afb" />
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
