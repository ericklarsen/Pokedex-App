import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "../../atoms/Flex";
import Img from "../../atoms/Img";
import UseDisableBodyScroll from "../../../hooks/UseDisableBodyScroll";

const Container = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;
  pointer-events: ${(props) => (props.isVisible ? "visible" : "none")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  z-index: 1000;
`;

const Sheet = styled(Flex)`
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: ${(props) => props.height || "60vh"};
  background-color: white;
  bottom: 0;
  left: 0;
  border-radius: 20px 20px 0 0;

  pointer-events: ${(props) => (props.isVisible ? "visible" : "none")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  animation: ${(props) => (props.isVisible ? "slide-up 0.3s" : "slide-off 0.35s")}
    cubic-bezier(0.36, 0.07, 0.19, 0.97);

  @keyframes slide-up {
    0% {
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-off {
    0% {
      transform: translateY(1000px);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(0);
    }
  }
`;

const Header = styled(Flex)`
  width: 100%;
  padding: 16px;
  justify-content: flex-end;
`;

const Bottomsheet = ({ isVisible, handleVisible, children, ...props }) => {
  UseDisableBodyScroll(isVisible);
  return (
    <Container isVisible={isVisible}>
      <Sheet isVisible={isVisible} {...props}>
        <Header>
          <Img
            width="18px"
            src="/static/svg/ic_close.svg"
            onClick={() => handleVisible(false)}
            alt="close-button"
          />
        </Header>
        {children}
      </Sheet>
    </Container>
  );
};

Bottomsheet.propTypes = {
  isVisible: PropTypes.bool,
  handleVisible: PropTypes.func,
  children: PropTypes.node,
};

export default Bottomsheet;
