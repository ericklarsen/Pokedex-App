import React from "react";
import PropTypes from "prop-types";
import Flex from "../../atoms/Flex";
import Typo from "../../atoms/Typography";
import { blackShades, font } from "../../../styles/_variables";
import ProgressBar from "../../atoms/ProgressBar";

const { black400 } = blackShades;
const { bold } = font;

const BaseStats = ({ label, value }) => {
  return (
    <Flex width="100%" margin="0 0 12px 0" justifyContent="space-between" alignItems="center">
      <Typo variant="body2" color={black400} style={{ width: "29%" }}>
        {label === "hp"
          ? "HP"
          : label === "attack"
          ? "Attack"
          : label === "defense"
          ? "Defense"
          : label === "special-attack"
          ? "Sp. Attack"
          : label === "special-defense"
          ? "Sp. Deff"
          : "Speed"}
      </Typo>
      <Typo variant="body2" font={bold}>
        {value}
      </Typo>
      <ProgressBar value={value} />
    </Flex>
  );
};

BaseStats.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
};

export default BaseStats;
