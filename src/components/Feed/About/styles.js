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

export const SocialLinks = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    color: #8492a6;
    transition: all 0.2s ease;

    svg {
      margin: 0 15px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const AboutText = styled.article`
  margin-top: 60px;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 2.3;
    animation: ${fade} 0.6s ease;
    color: #a6a8b9;
    text-align: justify;
  }
`;

export const AcademicEducation = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const AcademicTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }
`;

export const AcademicInfo = styled.div`
  margin-left: 16px;
  border-left: 1px solid #dee0f3;
  padding: 20px;

  p {
    line-height: 1.5;
    text-align: justify;

    max-width: 400px;
    overflow: hidden;
    /* text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; */

    @media (max-width: 520px) {
      line-height: 1.8;
    }
  }

  span {
    margin-top: 15px;
    display: block;
  }
`;
