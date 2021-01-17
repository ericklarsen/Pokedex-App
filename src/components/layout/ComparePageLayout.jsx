import React from "react";
import PropTypes from "prop-types";
import MainLayout from "./MainLayout";
import styled from "styled-components";
import Img from "../atoms/Img";
import Flex from "../atoms/Flex";

const Logo = styled(Img)`
  width: 100%;
  max-width: 268px;
  cursor: pointer;
`;

const Container = styled(Flex)`
  flex-direction: column;
  max-width: 567px;
  height: calc(100% - 200px);
  margin: 0 auto;
  padding: 0 16px;
  align-items: center;
  position: relative;
`;

const ComparePageLayout = ({ children }) => {
  return (
    <MainLayout title="Pokedex - Compare Your Pokemon">
      <Flex height="200px" width="100%" justifyContent="center" alignItems="center">
        <Logo src="/static/img/logo_pokemon.png" onClick={() => (window.location.href = "/")} />
      </Flex>
      <Container>{children}</Container>
    </MainLayout>
  );
};

ComparePageLayout.propTypes = {
  children: PropTypes.node,
};

export default ComparePageLayout;
