import React, { useState, useEffect } from "react";
import ComparePageLayout from "../components/layout/ComparePageLayout";
import Flex from "../components/atoms/Flex";
import Typo from "../components/atoms/Typography";
import { font, blackShades, breakPoint } from "../styles/_variables";
import Box from "../components/molecules/Box/Box";
import Img from "../components/atoms/Img";
import Button from "../components/atoms/Button";
import ListPokemon from "../components/organism/ComparePokemon/ListPokemon";
import Footer from "../components/molecules/Footer/Footer";
import { capitalize } from "../helpers/global_helper";
import styled from "styled-components";
import BattleLoading from "../components/molecules/BattleLoading/BattleLoading";
import BattleResultBox from "../components/organism/BattleArena/BattleResultBox";
import { battleCalculate } from "../helpers/battle_helper";

const { bold, semiBold } = font;
const { black400 } = blackShades;
const { mobileXL } = breakPoint;

const Wrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  @media only screen and (max-width: ${mobileXL + 1}px) {
    flex-direction: column;
  }
`;

const battleArena = () => {
  const [expandMine, setExpandMine] = useState(false);
  const [expandEnemy, setExpandEnemy] = useState(false);
  const [myPokemon, setMyPokemon] = useState({});
  const [enemyPokemon, setEnemyPokemon] = useState({});
  const [battleStatistic, setBattleStatistic] = useState([]);

  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (myPokemon?.id && enemyPokemon?.id) {
      setValid(true);
      return;
    }
    setValid(false);
  }, [myPokemon, enemyPokemon]);

  const handleBattle = async () => {
    setBattleStatistic([]);
    setLoading(true);
    await battleCalculate({ enemyPokemon, myPokemon, setBattleStatistic, fights: 100 });
    setLoading(false);
  };

  return (
    <ComparePageLayout>
      {loading && <BattleLoading />}
      <Flex direction="column" alignItems="center" margin="0 0 34px 0" style={{ flexShrink: 0 }}>
        <Typo margin="0 0 2px 0">Battle</Typo>
        <Typo variant="h3" font={bold}>
          Arena
        </Typo>
      </Flex>
      <Wrapper>
        {myPokemon?.id ? (
          <Box width="100%" maxWidth="100%">
            <Typo variant="body2" color={black400} font={semiBold}>
              My Pokemon
            </Typo>
            <Img
              src={myPokemon.sprites.front_default}
              width="100%"
              maxWidth="140px"
              margin="28px 0 12px 0"
            />
            <Typo variant="caption" color={black400} margin="0 0 2px 0">
              Name
            </Typo>
            <Typo variant="h5" font={bold} margin="0 0 28px 0">
              {capitalize(myPokemon.name)}
            </Typo>
            <Button
              variant="orange"
              padding="6px 0"
              width="108px"
              onClick={() => setExpandMine(true)}
            >
              <Typo variant="body2" color="white" font={bold}>
                Choose again
              </Typo>
            </Button>
          </Box>
        ) : (
          <Box
            width="100%"
            maxWidth="100%"
            minHeight="267px"
            height="100%"
            onClick={() => setExpandMine(true)}
            style={{ cursor: "pointer" }}
          >
            <Img maxWidth="56px" src="/static/svg/ic_plus.svg" />
            <Typo
              variant="body2"
              color={black400}
              margin="16px 0 0 0"
              style={{ textAlign: "center" }}
            >
              My Pokemon
            </Typo>
          </Box>
        )}
        <Typo variant="h5" font={bold} color={black400} margin="10px">
          VS
        </Typo>
        {enemyPokemon?.id ? (
          <Box width="100%" maxWidth="100%">
            <Typo variant="body2" color={black400} font={semiBold}>
              Other Pokemon
            </Typo>
            <Img
              src={enemyPokemon.sprites.front_default}
              width="100%"
              maxWidth="140px"
              margin="28px 0 12px 0"
            />
            <Typo variant="caption" color={black400} margin="0 0 2px 0">
              Name
            </Typo>
            <Typo variant="h5" font={bold} margin="0 0 28px 0">
              {capitalize(enemyPokemon.name)}
            </Typo>
            <Button
              variant="orange"
              padding="6px 0"
              width="108px"
              onClick={() => setExpandEnemy(true)}
            >
              <Typo variant="body2" color="white" font={bold}>
                Choose again
              </Typo>
            </Button>
          </Box>
        ) : (
          <Box
            width="100%"
            maxWidth="100%"
            minHeight="267px"
            height="100%"
            onClick={() => setExpandEnemy(true)}
            style={{ cursor: "pointer" }}
          >
            <Img src="/static/svg/ic_plus.svg" />
            <Typo
              variant="body2"
              color={black400}
              margin="16px 0 0 0"
              style={{ textAlign: "center" }}
            >
              Enemy Pokemon
            </Typo>
          </Box>
        )}
      </Wrapper>
      <Button
        variant="orange"
        maxWidth="200px"
        margin="24px 0"
        padding="10px 16px"
        onClick={valid ? handleBattle : undefined}
        style={{ filter: !valid && "grayscale(100%)" }}
      >
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <Typo font={bold} color="white">
            GO BATTLE!
          </Typo>
          <Img src="/static/svg/ic_battle.svg" width="32px" />
        </Flex>
      </Button>
      <ListPokemon
        expand={expandMine}
        setExpand={setExpandMine}
        selected={myPokemon}
        anotherSelected={enemyPokemon}
        onSelected={setMyPokemon}
      />
      <ListPokemon
        expand={expandEnemy}
        setExpand={setExpandEnemy}
        selected={enemyPokemon}
        anotherSelected={myPokemon}
        onSelected={setEnemyPokemon}
      />
      {battleStatistic.length ? (
        <BattleResultBox data={battleStatistic} myPokemon={myPokemon} enemyPokemon={enemyPokemon} />
      ) : (
        ""
      )}
      <Footer position="static" style={{ marginTop: "40px" }} />
    </ComparePageLayout>
  );
};

battleArena.propTypes = {};

export default battleArena;
