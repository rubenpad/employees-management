import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles';

const BounceDelay = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 
  
  40% { 
  
    transform: scale(1.0);
  }
`;

const Bounce = styled.div`
  margin: 3px auto;
  width: 70px;
  text-align: center;
  & > div {
    width: 10px;
    height: 10px;
    margin: 0 4px;
    background-color: ${colors.primary};
    border-radius: 100%;
    display: inline-block;
    animation: ${BounceDelay} 1.4s infinite ease-in-out both;
  }

  &:nth-child(2) {
    animation-delay: -0.32s;
  }
  &:nth-child(3) {
    animation-delay: -0.16s;
  }
`;

const Loader = () => (
  <Bounce>
    <div />
    <div />
    <div />
  </Bounce>
);

export default Loader;
