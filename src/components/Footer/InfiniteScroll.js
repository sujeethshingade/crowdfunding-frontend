import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollText = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ScrollContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 35vh;
  margin: auto;
  background-color: transparent;
  overflow: hidden;
  z-index: 1;
`;

const ScrollTitle = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: flex-start;
  width: 200%;
  height: 100%;
  white-space: nowrap;
  transform: scale(2);
  & > div {
    display: flex;
    animation: ${scrollText} 80s infinite linear;
  }
  h1 {
    margin: 0;
    font-size: 75px;
    font-style: bold;
    font-family: Calibri (Body);
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
  }
  a {
    text-decoration: none;
    color: #D2D4D3;
  }
  a:hover {
    -webkit-text-stroke: 1px #D2D4D3;
    color: transparent;
  }
`;

const InfiniteScrollText = () => {
  return (
    <ScrollContainer>
      <ScrollTitle>
        <div>
          <h1>
            <a href="">Every</a> <a href="">Contribution</a> <a href="">Counts.</a>&nbsp;
          </h1>
          <h1>
            <a href="">Every</a> <a href="">Contribution</a> <a href="">Counts.</a>&nbsp;
          </h1>
          <h1>
            <a href="">Every</a> <a href="">Contribution</a> <a href="">Counts.</a>&nbsp;
          </h1>
          <h1>
            <a href="">Every</a> <a href="">Contribution</a> <a href="">Counts.</a>&nbsp;
          </h1>
        </div>
      </ScrollTitle>
    </ScrollContainer>
  );
};

export default InfiniteScrollText;
