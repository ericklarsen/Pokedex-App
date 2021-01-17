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
  pointer-events: visible;
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
  animation: infinite ${(props) => (props.right ? "right-animate" : "left-animate")} 2s
    cubic-bezier(0.66, 0, 0.19, 1);

  @keyframes left-animate {
    0% {
      opacity: 0;
      transform: scale(0) translateX(-70px) rotate(0);
    }
    40% {
      transform: scale(1.2) translateX(-80px) rotate(-180deg);
      opacity: 1;
    }
    60% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes right-animate {
    0% {
      opacity: 0;
      transform: scale(0) translateX(70px) rotate(0);
    }
    40% {
      transform: scale(1.2) translateX(80px) rotate(180deg);
      opacity: 1;
    }
    60% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

const BattleLoading = () => {
  return (
    <Container>
      <Overlay />
      <LoadingIcon src="/static/img/ic_loading.png" left alt="loading-image" />
      <LoadingIcon src="/static/img/ic_loading.png" right alt="loading-image" />
    </Container>
  );
};

BattleLoading.propTypes = {};

export default BattleLoading;
