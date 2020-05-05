import styled from 'styled-components';
import { colors } from '../../styles';

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

export const Error = styled.div`
  margin-top: 4px;
  color: ${colors.error};
  font-weight: normal;
`;
