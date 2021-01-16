import React from "react";
import PropTypes from "prop-types";
import Flex from "../../atoms/Flex";
import { font, blackShades, redShades } from "../../../styles/_variables";
import Typo from "../../atoms/Typography";

const { semiBold } = font;
const { black400 } = blackShades;
const { red400 } = redShades;

const Abilities = ({ label, effect, shortEffect }) => {
  return (
    <Flex direction="column" width="100%" margin="0 0 12px 0">
      <Typo font={semiBold} margin="0 0 4px 0">
        {label}
      </Typo>
      <Typo variant="body2" color={black400}>
        {effect}
      </Typo>
      <Flex margin="4px 0 0 0">
        <Typo variant="caption" color={black400}>
          <span style={{ fontFamily: semiBold, color: red400, fontStyle: "italic" }}>
            Short effect
          </span>{" "}
          : {shortEffect}
        </Typo>
      </Flex>
    </Flex>
  );
};

Abilities.propTypes = {
  label: PropTypes.any,
  effect: PropTypes.any,
  shortEffect: PropTypes.any,
};

export default Abilities;
