import React from "react";
import styled from "styled-components";
import Flex from "../../atoms/Flex";

const Container = styled(Flex)`
  flex-direction: column;
  width: ${(props) => props.width || "fit-content"};
  max-width: ${(props) => props.maxWidth || "255px"};
  padding: ${(props) => props.padding || "20px"};
  height: ${(props) => props.height || "fit-content"};
  max-height: ${(props) => props.maxHeight || "auto"};
  min-height: ${(props) => props.minHeight || "auto"};
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(117, 117, 117, 0.25);
  border-radius: ${(props) => props.radius || "20px"};
`;

const Box = (props) => {
  return <Container {...props}></Container>;
};

Box.propTypes = {};

export default Box;
