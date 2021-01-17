import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Flex from "../../atoms/Flex";
import styled from "styled-components";
import { redShades, yellowShades, font, blackShades, breakPoint } from "../../../styles/_variables";
import Typo from "../../atoms/Typography";
import Img from "../../atoms/Img";
import { capitalize } from "../../../helpers/global_helper";

const { red400 } = redShades;
const { yellow400 } = yellowShades;
const { black400 } = blackShades;
const { bold, semiBold } = font;
const { mobileXL } = breakPoint;

const Container = styled(Flex)`
  width: 100%;
  max-width: 200px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0px 1.5px 5px rgba(117, 117, 117, 0.25);
  flex-direction: column;
  border-radius: 20px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  animation: show-up 600ms cubic-bezier(0.66, 0, 0.19, 1);
  margin: 0 4px;
  margin-bottom: 32px;

  @media only screen and (max-width: ${mobileXL + 1}px) {
    max-width: 90%;
  }

  @keyframes show-up {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 0;
    }
    30% {
      transform: scale(0) rotate(100deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  :hover {
    transform: scale(1.1);
  }
`;

const Header = styled(Flex)`
  padding: 8px 20px;
  width: 100%;
  background: linear-gradient(90deg, ${red400} 0%, ${yellow400} 100%);
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;
`;

const Content = styled(Flex)`
  padding: 16px;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 20px 20px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled(Flex)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: rgba(196, 196, 196, 0.1);
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${(props) => props.bgColor || black400};
  border-radius: 100%;
  margin: 0 4px;
`;

const Card = (props) => {
  const { data } = props;
  return (
    <Container {...props}>
      <Header>
        <Flex alignItems="center" justifyContent="center" style={{ flexWrap: "wrap" }}>
          {data.types?.map((item, key) => (
            <Fragment key={key}>
              <Typo variant="body2" font={semiBold} color="white">
                {item.type.name}
              </Typo>
              {key + 1 < data.types.length && <Dot bgColor="white" />}
            </Fragment>
          ))}
        </Flex>
      </Header>
      <Content>
        <ImageWrapper>
          <Img width="100px" src={data?.sprites?.front_default || "/static/img/logo_pokemon.png"} />
        </ImageWrapper>
        <Typo variant="h5" font={bold} margin="14px 0 0 0" style={{ textAlign: "center" }}>
          {capitalize(data.name)}
        </Typo>
        <Flex width="100%" justifyContent="space-evenly" alignItems="center" margin="14px 0 0 0">
          <Flex direction="column" alignItems="center">
            <Typo variant="caption" color={black400} margin="0 0 2px 0">
              Weight
            </Typo>
            <Typo font={semiBold}>{data.weight / 10} kg</Typo>
          </Flex>

          <Flex direction="column" alignItems="center">
            <Typo variant="caption" color={black400} margin="0 0 2px 0">
              Height
            </Typo>
            <Typo font={semiBold}>{data.height / 10} m</Typo>
          </Flex>
        </Flex>

        <Flex direction="column" alignItems="center" margin="14px 0 0 0">
          <Typo variant="caption" color={black400} margin="0 0 2px 0">
            Ability
          </Typo>

          <Flex alignItems="center" justifyContent="center" style={{ flexWrap: "wrap" }}>
            {data.abilities?.map((item, key) => (
              <Fragment key={key}>
                <Typo font={semiBold} variant="body2">
                  {capitalize(item.ability.name)}
                </Typo>
                {key + 1 < data.abilities.length && <Dot />}
              </Fragment>
            ))}
          </Flex>
        </Flex>
      </Content>
    </Container>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
