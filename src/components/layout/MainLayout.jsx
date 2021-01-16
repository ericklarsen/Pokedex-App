import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "../atoms/CommonHead";
import { breakPoint } from "../../styles/_variables";

const { mobileXL } = breakPoint;

const Layout = styled.div`
  max-width: 1150px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow-y: ${(props) => props.lockScroll && "hidden"};
`;

const ImageOverlayTop = styled.img`
  width: 100%;
  max-width: 1150px;
  position: absolute;
  top: -10%;
  left: 0;
  z-index: -1;

  @media only screen and (max-width: ${mobileXL + 1}px) {
    top: -4%;
  }
`;

const MainLayout = ({ children, title, lockScroll }) => {
  return (
    <Layout lockScroll={lockScroll}>
      <Head>
        <title>{title}</title>
      </Head>
      <ImageOverlayTop src="/static/svg/pokemon_logo_overlay.svg" />
      {children}
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.any,
  lockScroll: PropTypes.bool,
};

export default MainLayout;
