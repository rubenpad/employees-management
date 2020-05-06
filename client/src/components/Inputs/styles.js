import styled from 'styled-components';
import { colors } from '../../styles';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: bold;

  input {
    margin-top: 8px;
    padding: 12px 0 8px 12px;
    border: 2px solid ${colors.dark};

    &:focus {
      border: 2px solid ${colors.primary};
    }
  }
`;

export const StyledSelect = styled.select`
  margin-top: 8px;
  padding: 12px 0 6px 12px;
  background: ${colors.white};
  border: 2px solid ${colors.dark};
  &:focus {
    border: 2px solid ${colors.primary};
  }
`;

export const Error = styled.span`
  margin-top: 2px;
  color: ${colors.error};
  font-size: 12px;
  font-weight: normal;
`;
