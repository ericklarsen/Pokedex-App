import { blackShades, font, fontSize, letterSpace, lineHeight } from "../../styles/_variables";

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const HeadingXL = styled.h1`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.hxl};
  line-height: ${(props) => props.lineHeight || lineHeight.hxl};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.hxl};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const HeadingOne = styled.h1`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.h1};
  line-height: ${(props) => props.lineHeight || lineHeight.h1};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.h1};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const HeadingTwo = styled.h2`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.h2};
  line-height: ${(props) => props.lineHeight || lineHeight.h2};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.h2};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const HeadingThree = styled.h3`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.h3};
  line-height: ${(props) => props.lineHeight || lineHeight.h3};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.h3};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const HeadingFour = styled.h4`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.h4};
  line-height: ${(props) => props.lineHeight || lineHeight.h4};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.h4};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const HeadingFive = styled.h5`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.h5};
  line-height: ${(props) => props.lineHeight || lineHeight.h5};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.h5};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const HeadingSix = styled.h6`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.h6};
  line-height: ${(props) => props.lineHeight || lineHeight.h6};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.h6};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const BodyOne = styled.p`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.body1};
  line-height: ${(props) => props.lineHeight || lineHeight.body1};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.body1};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const BodyTwo = styled.p`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.body2};
  line-height: ${(props) => props.lineHeight || lineHeight.body2};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.body2};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const Caption = styled.p`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.caption};
  line-height: ${(props) => props.lineHeight || lineHeight.caption};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.caption};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

const Small = styled.p`
  font-family: ${(props) => props.font || font.regular};
  font-size: ${(props) => props.size || fontSize.small};
  line-height: ${(props) => props.lineHeight || lineHeight.small};
  letter-spacing: ${(props) => props.letterSpace || letterSpace.small};
  color: ${(props) => props.color || blackShades.black600};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

function Typography(props) {
  if (props.variant == "hxl") return <HeadingXL {...props}>{props.children}</HeadingXL>;
  if (props.variant == "h1") return <HeadingOne {...props}>{props.children}</HeadingOne>;
  if (props.variant == "h2") return <HeadingTwo {...props}>{props.children}</HeadingTwo>;
  if (props.variant == "h3") return <HeadingThree {...props}>{props.children}</HeadingThree>;
  if (props.variant == "h4") return <HeadingFour {...props}>{props.children}</HeadingFour>;
  if (props.variant == "h5") return <HeadingFive {...props}>{props.children}</HeadingFive>;
  if (props.variant == "h6") return <HeadingSix {...props}>{props.children}</HeadingSix>;
  if (props.variant == "body2") return <BodyTwo {...props}>{props.children}</BodyTwo>;
  if (props.variant == "caption") return <Caption {...props}>{props.children}</Caption>;
  if (props.variant == "small") return <Small {...props}>{props.children}</Small>;
  return <BodyOne {...props}>{props.children}</BodyOne>;
}

Typography.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
};

export default Typography;
