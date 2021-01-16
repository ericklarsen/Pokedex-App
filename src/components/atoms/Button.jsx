import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { redShades, yellowShades, greenShades, blueShades } from "../../styles/_variables";

const { yellow400 } = yellowShades;
const { red400 } = redShades;
const { green400, green300 } = greenShades;
const { blue400, blue300 } = blueShades;

const Container = styled.button`
  width: ${(props) => props.width || "100%"};
  max-width: 267px;
  padding: ${(props) => props.padding || "14px 16px"};
  border-radius: ${(props) => props.radius || "8px"};
  margin: ${(props) => props.margin || "0"};
  box-shadow: 0px 4px 5px rgba(117, 117, 117, 0.25);
  background: ${(props) =>
    `linear-gradient(90deg, ${props.leftColor} 0%, ${props.rightColor} 100%)`};
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

const Button = (props) => {
  const { variant, children } = props;
  if (variant === "orange")
    return (
      <Container leftColor={red400} rightColor={yellow400} {...props}>
        {children}
      </Container>
    );
  if (variant === "green")
    return (
      <Container leftColor={green400} rightColor={green300} {...props}>
        {children}
      </Container>
    );
  return (
    <Container leftColor={blue400} rightColor={blue300} {...props}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.any,
};

export default Button;
