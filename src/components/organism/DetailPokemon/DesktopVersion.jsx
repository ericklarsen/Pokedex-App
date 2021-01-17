import React from "react";
import PropTypes from "prop-types";
import Flex from "../../atoms/Flex";
import Typo from "../../atoms/Typography";
import { font } from "../../../styles/_variables";
import Img from "../../atoms/Img";
import BaseStats from "./BaseStats";
import About from "./About";
import Abilities from "./Abilities";
import { capitalize } from "../../../helpers/global_helper";
import styled from "styled-components";

const { bold } = font;

const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  padding: 32px;
  justify-content: space-between;
  max-height: 600px;
  overflow-y: auto;
  scrollbar-width: thin;
`;

const DesktopVersion = ({ data, abilities }) => {
  return (
    <Wrapper>
      <Flex width="100%" style={{ flexShrink: 0 }}>
        <Flex flex="1" direction="column" alignItems="center" margin="0 32px 0 0">
          <Typo variant="caption">Pokemon Name</Typo>
          <Typo variant="h5" font={bold}>
            {capitalize(data.name)}
          </Typo>
          <Img
            width="100%"
            src={data.sprites.front_default || "/static/img/logo_pokemon.png"}
            margin="14px 0 0 0"
          />
        </Flex>

        <Flex flex="1.8" direction="column" margin="0 0 0 32px">
          <Typo variant="h6" font={bold} margin=" 0 0 16px 0">
            Base Stats
          </Typo>
          {data.stats.map((item, key) => (
            <BaseStats key={key} label={item.stat.name} value={item.base_stat} />
          ))}
        </Flex>
      </Flex>

      <Flex width="100%" margin="32px 0 0 0" style={{ flexShrink: 0 }}>
        <Flex flex="1" direction="column" margin="0 32px 0 0">
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
        <Flex flex="1.8" direction="column" margin="0 0 0 32px">
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
      </Flex>
    </Wrapper>
  );
};

DesktopVersion.propTypes = {
  data: PropTypes.object,
  abilities: PropTypes.array,
};

export default DesktopVersion;
