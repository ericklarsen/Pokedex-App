import React from "react";
import HomagepageLayout from "../components/layout/HomepageLayout";
import Typo from "../components/atoms/Typography";
import Flex from "../components/atoms/Flex";
import { font } from "../styles/_variables";
import Img from "../components/atoms/Img";
import MenuButton from "../components/molecules/MenuButton/MenuButton";

const { semiBold } = font;

const index = () => {
  return (
    <HomagepageLayout>
      <Flex
        width="52%"
        height="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding="0 16px"
        margin="0 auto"
      >
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          margin="0 0 36px 0"
          wrap="wrap"
        >
          <Typo variant="h6" font={semiBold} margin="0 10px 0 0">
            Welcome to
          </Typo>
          <Img width="120px" src="/static/svg/ic_pokedex.svg" />
        </Flex>
        <MenuButton
          label="Search"
          caption="Pokemon"
          variant="orange"
          icon="/static/svg/ic_search.svg"
          onClick={() => (window.location.href = "/pokemon-list")}
        />
        <Flex width="100%" justifyContent="space-evenly" alignItems="center" wrap="wrap">
          <MenuButton
            label="Compare"
            caption="Pokemon"
            variant="green"
            icon="/static/svg/ic_compare.svg"
            margin="16px 0 0 0"
          />
          <MenuButton
            label="Win Rate"
            caption="Prediction"
            variant="blue"
            icon="/static/svg/ic_winrate.svg"
            margin="16px 0 0 0"
          />
        </Flex>
      </Flex>
    </HomagepageLayout>
  );
};

index.propTypes = {};

export default index;
