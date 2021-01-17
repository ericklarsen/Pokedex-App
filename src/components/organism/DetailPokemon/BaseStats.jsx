import React from "react";
import PropTypes from "prop-types";
import Flex from "../../atoms/Flex";
import Typo from "../../atoms/Typography";
import { blackShades, font, greenShades, redShades } from "../../../styles/_variables";
import ProgressBar from "../../atoms/ProgressBar";

const { black400 } = blackShades;
const { green400 } = greenShades;
const { red400 } = redShades;
const { bold } = font;

const BaseStats = ({ label, value, different }) => {
  return (
    <Flex width="100%" margin="0 0 12px 0" justifyContent="space-between" alignItems="center">
      <Typo
        variant="body2"
        color={black400}
        margin="0 8px 0 0"
        style={{ width: "29%", textAlign: "left" }}
      >
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
      <Typo variant="body2" font={bold} margin="0 8px 0 0">
        {value}
      </Typo>
      <ProgressBar value={value} />
      {(different || different === 0) && (
        <Typo
          variant="body2"
          font={bold}
          margin="0 0 0 8px"
          color={different >= 1 ? green400 : different === 0 ? black400 : red400}
          style={{ minWidth: "30px", textAlign: "right" }}
        >
          {different >= 1 ? "+" + different : different}
        </Typo>
      )}
    </Flex>
  );
};

BaseStats.propTypes = {
  label: PropTypes.any,
  value: PropTypes.any,
  different: PropTypes.any,
};

export default BaseStats;
