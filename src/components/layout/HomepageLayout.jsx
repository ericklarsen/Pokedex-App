import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakPoint } from "../../styles/_variables";
import MainLayout from "./MainLayout";
import Footer from "../molecules/Footer/Footer";
import Flex from "../atoms/Flex";

const { mobileXL, tabletXL } = breakPoint;

const ImageOverlayBottom = styled.img`
  position: fixed;
  width: 100%;
  max-width: 300px;
  left: ${(props) => props.left && "10%"};
  right: ${(props) => props.right && "10%"};
  bottom: -6%;
  z-index: -1;
  animation: infinite ${(props) => (props.right ? "right" : props.left && "left")} 2.5s
    cubic-bezier(0.66, 0, 0.19, 1);

  @media only screen and (max-width: ${tabletXL + 1}px) {
    max-width: 240px;
  }

  @media only screen and (max-width: ${mobileXL + 1}px) {
    opacity: 0;
  }

  @keyframes right {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.1) rotate(-4deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes left {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.1) rotate(4deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`;

const ImageOverlayMiddle = styled.img`
  position: absolute;
  width: 100%;
  max-width: 400px;
  right: 0;
  left: 0;
  margin: 0 auto;
  bottom: -15%;
  z-index: -1;
`;

const Logo = styled.img`
  max-width: 462px;
  margin: 0 auto;
  margin-top: 40px;
  width: 100%;
  padding: 0 16px;
`;

const HomepageLayout = ({ children }) => {
  return (
    <MainLayout title="Pokedex - Go Search Your Pokemon" lockScroll>
      <Flex
        direction="column"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="space-between"
      >
        <Logo src="/static/img/logo_pokemon.png" />
        {children}
        <ImageOverlayBottom left src="/static/img/img_snorlax.png" alt="snorlax" />
        <ImageOverlayMiddle src="/static/svg/pokedex_overlay.svg" alt="pokedex-overlay" />
        <ImageOverlayBottom right src="/static/img/img_ash.png" alt="ash" />
        <Footer position="static" />
      </Flex>
    </MainLayout>
  );
};

HomepageLayout.propTypes = {
  children: PropTypes.node,
};

export default HomepageLayout;
