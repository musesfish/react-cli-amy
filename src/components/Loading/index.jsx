import React from 'react'
// import { Spin } from 'antd-mobile'
import styled from 'styled-components'

const StyledSpin = styled.div`
  width: 80px;
  height: 80px;
  display: block;
  position: relative;
  margin: 100px auto;
  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #252b5d;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
  }
  
  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  @-webkit-keyframes bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
`;

export default () => {
  return (
    <StyledSpin>
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </StyledSpin>
  );
};