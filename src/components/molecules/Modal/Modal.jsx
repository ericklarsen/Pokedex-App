import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { blackShades, font } from "../../../styles/_variables";
import Typo from "../../atoms/Typography";
import Img from "../../atoms/Img";

const { black200 } = blackShades;
const { bold } = font;

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
  pointer-events: ${(props) => (props.isVisible ? "visible" : "none")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 200ms ease-in-out;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 567px;
  width: 100%;
  min-height: 400px;
  border-radius: 8px;

  pointer-events: ${(props) => (props.isVisible ? "visible" : "none")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  animation: ${(props) => (props.isVisible ? "pop-up 0.4s" : "pop-off 0.35s")}
    cubic-bezier(0.36, 0.07, 0.19, 0.97);

  @keyframes pop-up {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
    }
    70% {
      transform: scale(1);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes pop-off {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(200px);
    }
  }
`;

const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  border-bottom: 1px solid ${black200};
`;

const Modal = ({ isVisible, handleVisible, title, children }) => {
  return (
    <Container isVisible={isVisible}>
      <ModalContainer isVisible={isVisible}>
        <HeaderModal>
          <Typo variant="h6" font={bold}>
            {title}
          </Typo>
          <Img
            src="/static/svg/ic_close.svg"
            style={{ cursor: "pointer" }}
            onClick={() => handleVisible(false)}
            alt="close-button"
          />
        </HeaderModal>
        {children}
      </ModalContainer>
    </Container>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  handleVisible: PropTypes.func,
  title: PropTypes.any,
  children: PropTypes.node,
};

export default Modal;
