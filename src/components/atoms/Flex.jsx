import React, { forwardRef } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-grow: ${(props) => props.grow || 0};
  flex-basis: ${(props) => props.basis || "auto"};
  flex-shrink: ${(props) => props.shrink || 1};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex: ${(props) => props.flex || "0 1 auto"};
  order: ${(props) => props.order || 0};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.maxWidth || "none"};
  min-width: ${(props) => props.minWidth || "none"};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.maxHeight || "none"};
  min-height: ${(props) => props.minHeight || "none"};
`;

const Flex = forwardRef((props, ref) => {
  return (
    <FlexBox ref={ref} {...props}>
      {props.children}
    </FlexBox>
  );
});

Flex.displayName = "Flex";
Flex.propTypes = {
  children: PropTypes.any,
};

export default Flex;
