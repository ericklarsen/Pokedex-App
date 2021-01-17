import React from "react";
import Img from "../../atoms/Img";
import Typo from "../../atoms/Typography";
import { blackShades } from "../../../styles/_variables";

const { black400 } = blackShades;

const NotFoundState = () => {
  return (
    <>
      <Img
        src="/static/img/ic_pokemon_logo_outline.png"
        maxWidth="200px"
        style={{ opacity: 0.5 }}
        alt="pokemon-logo-outline"
      />
      <Typo color={black400} margin="8px 0 0 0">
        Not Found
      </Typo>
    </>
  );
};

NotFoundState.propTypes = {};

export default NotFoundState;
