import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakPoint } from "../../styles/_variables";
import MainLayout from "./MainLayout";
import Footer from "../molecules/Footer/Footer";

const { mobileXL } = breakPoint;

const ImageOverlayBottom = styled.img`
  position: absolute;
  width: 100%;
  max-width: 240px;
  left: ${(props) => props.left && "6%"};
  right: ${(props) => props.right && "6%"};
  bottom: -6%;
  z-index: 0;
  animation: infinite ${(props) => (props.right ? "right-animate" : props.left && "left-animate")}
    2.5s cubic-bezier(0.66, 0, 0.19, 1);

  @media only screen and (max-width: ${mobileXL + 1}px) {
    max-width: 200px;
  }

  @keyframes right-animate {
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

  @keyframes left-animate {
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
  position: absolute;
  left: 0;
  right: 0;
  top: 62px;
  margin: 0 auto;
  width: 100%;
  max-width: 462px;
  z-index: 10;
  padding: 0 16px;
`;

const HomepageLayout = ({ children }) => {
  return (
    <MainLayout title="Pokedex - Go Search Your Pokemon" lockScroll>
      <Logo src="/static/img/logo_pokemon.png" />
      {children}
      <ImageOverlayBottom left src="/static/img/img_snorlax.png" />
      <ImageOverlayMiddle src="/static/svg/pokedex_overlay.svg" />
      <ImageOverlayBottom right src="/static/img/img_ash.png" />
      <Footer />
    </MainLayout>
  );
};

HomepageLayout.propTypes = {
  children: PropTypes.node,
};

export default HomepageLayout;
