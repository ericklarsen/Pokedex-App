import React from "react";
import PropTypes from "prop-types";
import Flex from "../../atoms/Flex";
import Typo from "../../atoms/Typography";
import { blackShades, font } from "../../../styles/_variables";

const { black400 } = blackShades;
const { bold } = font;

const About = ({ label, value }) => {
  return (
    <Flex width="100%" margin="0 0 12px 0">
      <Typo variant="body2" color={black400} style={{ maxWidth: "60px", width: "100%" }}>
        {label}
      </Typo>
      <Typo variant="body2" font={bold}>
        {value}
      </Typo>
    </Flex>
  );
};

About.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
};

export default About;
