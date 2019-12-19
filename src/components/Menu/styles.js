import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;

  ul {
    display: flex;
    align-items: center;

    li {
      margin-right: 0.5rem;
      display: inline-block;
      position: relative;
    }
  }

  div {
    button {
      display: flex;
      align-items: center;
      background: none;
      border: 0;
      font-size: 0.875rem;
      font-weight: 500;
      color: #ffffffd9;

      img {
        width: auto;
        height: 14px;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const NavLink = styled.button`
  padding: 0.75rem 1rem;
  background: none;
  border: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffffd9;

  span {
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }
`;
