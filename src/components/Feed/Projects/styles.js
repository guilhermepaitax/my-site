import styled from 'styled-components';

import { fade } from '~/styles/animations';

export const Container = styled.div`
  padding-top: 70px;

  h1 {
    color: #202020;
    font-size: 34px;
    animation: ${fade} 0.6s ease;
  }

  > p {
    margin-top: 60px;
    font-size: 16px;
    font-weight: 400;
    line-height: 2.3;
    animation: ${fade} 0.6s ease;
    color: #a6a8b9;
    text-align: justify;
  }
`;
