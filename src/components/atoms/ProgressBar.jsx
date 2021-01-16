import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { greenShades, redShades } from "../../styles/_variables";

const { green300 } = greenShades;
const { red400 } = redShades;

const Progress = styled.progress`
  width: calc(100% - 44%);
  border: 0px;
  height: 6px;
  border-radius: 10px;

  ::-webkit-progress-bar {
    background-color: #c4c4c4;
    border-radius: 7px;
  }

  ::-webkit-progress-value {
    background-color: ${(props) => (props.value < 50 ? red400 : green300)};
    border-radius: 7px;
  }

  ::-moz-progress-bar {
    background-color: ${(props) => (props.value < 50 ? red400 : green300)};
    border-radius: 7px;
  }
`;

const ProgressBar = ({ value }) => {
  return <Progress max="100" value={value} />;
};

ProgressBar.propTypes = {
  value: PropTypes.any,
};

export default ProgressBar;
