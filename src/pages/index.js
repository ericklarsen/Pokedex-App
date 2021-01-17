import React from "react";
import HomagepageLayout from "../components/layout/HomepageLayout";
import Typo from "../components/atoms/Typography";
import Flex from "../components/atoms/Flex";
import { font, breakPoint } from "../styles/_variables";
import Img from "../components/atoms/Img";
import MenuButton from "../components/molecules/MenuButton/MenuButton";
import styled from "styled-components";
import { useRouter } from "next/router";

const { semiBold } = font;
const { mobileXL } = breakPoint;

const Wrapper = styled(Flex)`
  width: 52%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  margin: 0 auto;

  @media only screen and (max-width: ${mobileXL + 1}px) {
    width: 90%;
  }
`;

const index = () => {
  const router = useRouter();

  return (
    <HomagepageLayout>
      <Wrapper>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          margin="0 0 16px 0"
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
          onClick={() => router.push("/list-pokemon")}
        />
        <Flex width="100%" justifyContent="space-evenly" alignItems="center" wrap="wrap">
          <MenuButton
            label="Compare"
            caption="Pokemon"
            variant="green"
            icon="/static/svg/ic_compare.svg"
            margin="16px 0 0 0"
            onClick={() => router.push("/compare-pokemon")}
          />
          <MenuButton
            label="Win Rate"
            caption="Prediction"
            variant="blue"
            icon="/static/svg/ic_winrate.svg"
            margin="16px 0 0 0"
            onClick={() => router.push("/win-rate-pokemon")}
          />
        </Flex>
      </Wrapper>
    </HomagepageLayout>
  );
};

index.propTypes = {};

export default index;
