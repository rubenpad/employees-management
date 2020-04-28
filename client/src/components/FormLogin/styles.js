import styled from 'styled-components';
import { colors } from '../../styles';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 320px;
  grid-column: auto;
  justify-self: center;
  align-self: center;
  padding: 16px;
  background: ${colors.white};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: autofill;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: bold;

  input {
    margin-top: 8px;
    padding: 16px 0 16px 12px;
    border: 2px solid ${colors.dark};

    &:focus {
      border: 2px solid ${colors.primary};
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  margin: 4px 0;
  justify-self: center;
  background: ${colors.primary};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3 ease;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
