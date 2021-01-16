import React from "react";
import styled from "styled-components";

const Image = styled.img`
  object-fit: ${(props) => props.fit || "fill"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.maxWidth || "none"};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.maxHeight || "none"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  border-radius: ${(props) => props.radius || 0};
`;

function Img(props) {
  return <Image {...props} />;
}

export default Img;
