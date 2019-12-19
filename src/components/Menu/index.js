import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

import { Container, Content, NavLink } from './styles';

import BrasilIcon from '~/assets/icon-brasil-96.png';

export default function Menu() {
  return (
    <Container>
      <Content>
        <ul>
          <li>
            <NavLink type="button">
              <span>
                Sobre <FaAngleDown size={15} />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink type="button">
              <span>
                Projetos <FaAngleDown size={15} />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink type="button">Contato</NavLink>
          </li>
        </ul>
        <div>
          <button type="button">
            <img src={BrasilIcon} alt="Bandeira do Brasil" />
            PT-BR
          </button>
        </div>
      </Content>
    </Container>
  );
}
