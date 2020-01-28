import styled from 'styled-components';

import { fade } from '~/styles/animations';

export const Container = styled.div`
  padding-top: 60px;

  h1 {
    color: #202020;
    font-size: 34px;
    animation: ${fade} 0.6s ease;
  }
`;
