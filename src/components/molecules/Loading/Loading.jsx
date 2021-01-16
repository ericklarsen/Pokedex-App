import React from "react";
import styled from "styled-components";
import Flex from "../../atoms/Flex";
import Img from "../../atoms/Img";

const Container = styled(Flex)`
  justify-content: center;
  align-items: center;
  margin: auto;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  pointer-events: none;
`;

const Overlay = styled(Flex)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.6;
`;

const LoadingIcon = styled(Img)`
  position: absolute;
  width: 100px;
  animation: infinite loading-animate 2s cubic-bezier(0.66, 0, 0.19, 1);

  @keyframes loading-animate {
    0% {
      opacity: 0;
      transform: scale(1) translateY(0) rotate(0);
    }
    10% {
      transform: translateY(10px);
    }
    25% {
      opacity: 1;
      transform: translateY(0px);
    }
    32% {
      transform: translateY(10px);
    }
    50% {
      transform: scale(1.1) rotate(360deg);
    }
    100% {
      transform: scale(1) rotate(0);
    }
  }
`;

const Loading = () => {
  return (
    <Container>
      <Overlay />
      <LoadingIcon src="/static/img/ic_loading.png" />
    </Container>
  );
};

Loading.propTypes = {};

export default Loading;
