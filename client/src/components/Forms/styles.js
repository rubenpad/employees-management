import styled from 'styled-components';
import { Form as form } from 'formik';
import { Link as LinkRouter } from 'react-router-dom';
import { colors } from '../../styles';

export const Link = styled(LinkRouter)`
  margin-left: 16px;
  color: ${colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 380px;
  grid-column: auto;
  justify-self: center;
  align-self: center;
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
`;
