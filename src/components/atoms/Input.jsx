import React from "react";
import PropTypes from "prop-types";
import Flex from "./Flex";
import styled from "styled-components";
import { blackShades, font, fontSize } from "../../styles/_variables";

const { black200, black600 } = blackShades;
const { regular } = font;
const { body1 } = fontSize;

const Container = styled(Flex)`
  width: ${(props) => props.width || "100%"};
  padding: 12px 20px;
  background-color: white;
  border: 1px solid ${black200};
  border-radius: 20px;
  align-items: center;
`;

const Field = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-family: ${regular};
  font-size: ${body1};
  color: ${black600};
`;

const Input = ({ width, children, ...props }) => {
  return (
    <Container width={width}>
      <Field {...props} />
      {children}
    </Container>
  );
};

Input.propTypes = {
  width: PropTypes.any,
  children: PropTypes.node,
};

export default Input;
