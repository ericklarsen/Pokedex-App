import React from "react";
import PropTypes from "prop-types";
import Img from "../../atoms/Img";
import Flex from "../../atoms/Flex";
import Typo from "../../atoms/Typography";
import { capitalize } from "../../../helpers/global_helper";
import { font } from "../../../styles/_variables";
import BaseStats from "./BaseStats";
import About from "./About";
import Abilities from "./Abilities";
import styled from "styled-components";

const { bold } = font;

const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  padding: 0 32px 16px 32px;
  justify-content: space-between;
  margin: 14px 0 0 0;
  max-height: 600px;
  overflow-y: scroll;
`;

const MobileVersion = ({ data, abilities }) => {
  return (
    <>
      <Img
        height="150px"
        src={data.sprites.front_default}
        margin="14px 0 0 0"
        style={{ position: "absolute", top: "-90px", margin: "0 auto", left: 0, right: 0 }}
        alt="pokemon"
      />

      <Flex
        width="100%"
        direction="column"
        alignItems="center"
        margin="0 32px 0 0"
        style={{ flexShrink: 0 }}
      >
        <Typo variant="caption">Pokemon Name</Typo>
        <Typo variant="h4" font={bold}>
          {capitalize(data.name)}
        </Typo>
      </Flex>
      <Wrapper>
        <Flex width="100%" direction="column" style={{ flexShrink: 0 }}>
          <Typo variant="h6" font={bold} margin=" 0 0 16px 0">
            Base Stats
          </Typo>
          {data.stats.map((item, key) => (
            <BaseStats key={key} label={item.stat.name} value={item.base_stat} />
          ))}
        </Flex>

        <Flex width="100%" direction="column" margin="16px 0 0 0" style={{ flexShrink: 0 }}>
          <Typo variant="h6" font={bold} margin=" 0 0 16px 0">
            About
          </Typo>
          <About label="Species" value={capitalize(data.species.name)} />
          <About label="Height" value={data.height / 10 + " m"} />
          <About label="Weight" value={data.weight / 10 + " kg"} />
          <About
            label="Type"
            value={data.types.map((item, key) =>
              key < data.types.length - 1
                ? capitalize(item.type.name) + ", "
                : capitalize(item.type.name)
            )}
          />
        </Flex>
        <Flex width="100%" direction="column" margin="16px 0 0 0" style={{ flexShrink: 0 }}>
          <Typo variant="h6" font={bold} margin=" 0 0 12px 0">
            Abilities
          </Typo>
          {abilities.map((item, key) => (
            <Abilities
              key={key}
              label={capitalize(item.name)}
              effect={item.effect_entries
                .filter((item) => item.language.name === "en")
                .map((data) => data.effect)}
              shortEffect={item.effect_entries
                .filter((item) => item.language.name === "en")
                .map((data) => data.short_effect)}
            />
          ))}
        </Flex>
      </Wrapper>
    </>
  );
};

MobileVersion.propTypes = {
  data: PropTypes.object,
  abilities: PropTypes.array,
};

export default MobileVersion;
