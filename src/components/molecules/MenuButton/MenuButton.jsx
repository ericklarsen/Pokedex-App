import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import Flex from "../../atoms/Flex";
import Typo from "../../atoms/Typography";
import Img from "../../atoms/Img";
import { font } from "../../../styles/_variables";

const { bold } = font;

const MenuButton = (props) => {
  const { label, caption, variant, icon } = props;
  return (
    <Button variant={variant} padding="12px 16px" {...props}>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Flex direction="column">
          <Typo variant="h5" color="white" font={bold}>
            {label}
          </Typo>
          <Typo variant="body2" color="white">
            {caption}
          </Typo>
        </Flex>
        <Flex style={{ paddingLeft: "16px", borderLeft: "2px solid white" }}>
          <Img width="36px" height="36px" maxWidth="36px" src={icon} />
        </Flex>
      </Flex>
    </Button>
  );
};

MenuButton.propTypes = {
  label: PropTypes.any,
  caption: PropTypes.any,
  variant: PropTypes.any,
  icon: PropTypes.any,
};

export default MenuButton;
