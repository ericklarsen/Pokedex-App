import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "../../molecules/Box/Box";
import Flex from "../../atoms/Flex";
import Typo from "../../atoms/Typography";
import Img from "../../atoms/Img";
import { blackShades, font } from "../../../styles/_variables";
import styled from "styled-components";
import { capitalize } from "../../../helpers/global_helper";

const { black400 } = blackShades;
const { bold } = font;

const Container = styled(Box)`
  max-width: 400px;
  width: 100%;
  animation: pop-up 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  flex-shrink: 0;
`;

const BattleResultBox = ({ data, myPokemon, enemyPokemon }) => {
  const [winRate, setWinRate] = useState("");
  const [winner, setWinner] = useState({});

  useEffect(() => {
    if (data.length) {
      const myResult = data.filter((fil) => fil.id === myPokemon.id).length;
      const enemyResult = data.filter((fil) => fil.id === enemyPokemon.id).length;

      if (myResult > enemyResult) {
        setWinRate(myResult);
        setWinner(myPokemon);
      } else if (myResult < enemyResult) {
        setWinRate(enemyResult);
        setWinner(enemyPokemon);
      }
    }
  }, [data]);

  return (
    <Container>
      <Flex direction="row" width="100%">
        {winRate ? (
          <>
            <Flex direction="column" flex="1" margin="0 16px 0 0">
              <Typo variant="body2" color={black400} margin="0 0 2px 0">
                The winner is
              </Typo>
              <Typo variant="h4" font={bold}>
                {capitalize(winner.name)}
              </Typo>
            </Flex>
            <Flex direction="column" flex="1">
              <Typo variant="body2" color={black400} margin="0 0 2px 0">
                Win rate from 100 fights
              </Typo>
              <Typo variant="h4" font={bold}>
                {winRate}%
              </Typo>
            </Flex>
          </>
        ) : (
          <>
            <Flex direction="column" flex="1">
              <Typo variant="body2" color={black400} margin="0 0 2px 0">
                The fight is
              </Typo>
              <Typo variant="h4" font={bold}>
                DRAW
              </Typo>
            </Flex>
            <Flex direction="column" flex="1">
              <Typo variant="body2" color={black400} margin="0 0 2px 0">
                My Pokemon
              </Typo>
              <Typo variant="h4" font={bold}>
                50%
              </Typo>
            </Flex>
            <Flex direction="column" flex="1">
              <Typo variant="body2" color={black400} margin="0 0 2px 0">
                Enemy Pokemon
              </Typo>
              <Typo variant="h4" font={bold}>
                50%
              </Typo>
            </Flex>
          </>
        )}
      </Flex>
      {winRate && (
        <Flex direction="row" width="100%" margin="24px 0 0 0">
          <Flex direction="column" flex="1" alignItems="center">
            <Img width="100%" maxWidth="140px" src={winner?.sprites?.front_default} />
            <Typo variant="body2" color={black400} margin="8px 0 0 0">
              Winner
            </Typo>
          </Flex>
          <Flex direction="column" flex="1" alignItems="center">
            <Img
              width="100%"
              maxWidth="140px"
              src={
                winner?.id === enemyPokemon.id
                  ? myPokemon.sprites.front_default
                  : enemyPokemon.sprites.front_default
              }
              style={{ filter: "grayscale(100%) " }}
            />
            <Typo variant="body2" color={black400} margin="8px 0 0 0">
              Loser
            </Typo>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};

BattleResultBox.propTypes = {
  data: PropTypes.array,
  myPokemon: PropTypes.object,
  enemyPokemon: PropTypes.object,
};

export default BattleResultBox;
