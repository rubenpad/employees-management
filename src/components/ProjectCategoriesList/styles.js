import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: autofill;

  h2 {
    width: 100%;
    font-size: 20px;
    text-transform: uppercase;
    user-select: none;
  }

  ul {
    margin-top: 12px;
  }
`;
