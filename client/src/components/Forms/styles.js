import styled from 'styled-components';
import { Form as form } from 'formik';
import { Link as LinkRouter } from 'react-router-dom';
import { colors, responsive } from '../../styles';

export const Link = styled(LinkRouter)`
  margin-left: 16px;
  color: ${colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

export const FormContainer = styled.div`
  grid-column: auto;
  justify-self: center;
  align-self: center;

  width: 100%;
  max-width: 420px;
  padding: 16px;
  background: ${colors.white};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 24px;
  }

  div {
    margin: 24px 0 0 4px;
    font-size: 14px;
  }
`;

export const FormContainerExtended = styled.div`
  grid-column: auto;
  justify-self: center;
  align-self: center;
  margin: 24px 0 0 0;

  width: 100%;
  max-width: 480px;
  padding: 24px;
  background: ${colors.white};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 24px;
  }
`;

export const LargeForm = styled(form)`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 100%;
  grid-template-rows: auto;

  ${responsive.small`
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto;

    [for='firstName'] {
     grid-area: 1 / 1 / 2 / 2;
    }

    [for='lastName'] {
     grid-area: 1 / 2 / 2 / 3;
    }

    [for='email'] {
     grid-area: 2 / 1 / 3 / 2;
    }

    [for='salary'] {
     grid-area: 2 / 2 / 3 / 3;
    }

    [for='birthDate'] {
     grid-area: 3 / 1 / 4 / 2;
    }

    [for='contractType'] {
     grid-area: 3 / 2 / 4 / 3;
    }

    [for='city'] {
     grid-area: 4 / 1 / 5 / 2;
    }

    [for='status'] {
     grid-area: 4 / 2 / 5 / 3;
    }

    button {
     grid-area: 5 / 1 / 6 / 3;
     align-self: center;
    }
  `}
`;

export const Form = styled(form)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: autofill;
`;

export const Button = styled.button`
  width: 100%;
  margin: 4px 0;
  justify-self: center;
  background: ${colors.black};
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3 ease;
  opacity: 0.9;
  position: relative;

  &:hover {
    opacity: 1;
  }
`;
