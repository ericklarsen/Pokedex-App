import styled, { keyframes } from "styled-components";

import React from "react";
import Img from "./Img";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Image = styled(Img)`
  width: 60px;
  object-fit: contain;
  opacity: 0.5;
  animation: ${spin} 1s linear infinite;
`;

function Spinner(props) {
  return <Image src="/static/img/ic_pokeball.png" {...props} alt="spinner" />;
}

export default Spinner;
