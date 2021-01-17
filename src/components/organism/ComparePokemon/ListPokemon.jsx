import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "../../molecules/Modal/Modal";
import Flex from "../../atoms/Flex";
import styled from "styled-components";
import { blackShades, font } from "../../../styles/_variables";
import Img from "../../atoms/Img";
import Typo from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { capitalize } from "../../../helpers/global_helper";
import UseGetDetailPokemonData from "../../../hooks/UseGetDetailPokemonData";
import Spinner from "../../atoms/Spinner";

const { black200, black400 } = blackShades;
const { bold } = font;

const ItemContainer = styled(Flex)`
  width: 100%;
  min-height: 400px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  flex-shrink: 0;
`;

const ItemBox = styled(Flex)`
  width: 100%;
  border: 1px solid ${black200};
  border-radius: 8px;
  padding: 10px 14px;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  animation: fade 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97);

  @keyframes fade {
    0% {
      transform: scaleY(0);
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

const ListPokemon = ({ expand, setExpand, selected, anotherSelected, onSelected }) => {
  const [loading, setLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const [currentSelected, setCurrentSelected] = useState([]);

  UseGetDetailPokemonData({ setLoading, currentUrl, setNextUrl, setPrevUrl, setPokemonData });

  useEffect(() => {
    if (expand) {
      setCurrentSelected(selected);
    }
  }, [expand]);

  const handleNext = () => {
    setCurrentUrl(nextUrl);
  };

  const handleBack = () => {
    setCurrentUrl(prevUrl);
  };

  const handleChoose = () => {
    setExpand(false);
    onSelected(currentSelected);
  };

  return (
    <Modal isVisible={expand} handleVisible={setExpand} title="List Pokemon">
      <Flex direction="column" width="100%" padding="20px">
        <ItemContainer>
          {loading ? (
            <Flex width="100%" height="400px" justifyContent="center" alignItems="center">
              <Spinner />
            </Flex>
          ) : (
            pokemonData
              .filter((fil) => fil.id !== anotherSelected?.id)
              .map((item) => (
                <ItemBox key={item.id} onClick={() => setCurrentSelected(item)}>
                  <Img
                    width="20px"
                    height="20px"
                    src={
                      item.id === currentSelected?.id
                        ? "/static/svg/ic_checkbox_enabled.svg"
                        : "/static/svg/ic_checkbox_disabled.svg"
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <Flex width="55px" height="55px" margin="0 0 0 16px">
                    <Img src={item.sprites.front_default} maxWidth="55px" />
                  </Flex>
                  <Flex flex="1" wrap="wrap">
                    <Flex flex="1" direction="column" margin="0 0 0 24px">
                      <Typo variant="caption" color={black400} margin="0 0 2px 0">
                        Name
                      </Typo>
                      <Typo font={bold}>{capitalize(item.name)}</Typo>
                    </Flex>
                    <Flex flex="1" direction="column" margin="0 0 0 24px">
                      <Typo variant="caption" color={black400} margin="0 0 2px 0">
                        Type
                      </Typo>
                      <Typo font={bold}>
                        {item.types.map((data, key) =>
                          key < item.types?.length - 1
                            ? capitalize(data.type.name) + ", "
                            : capitalize(data.type.name)
                        )}
                      </Typo>
                    </Flex>
                    <Flex flex="1" direction="column" margin="0 0 0 24px">
                      <Typo variant="caption" color={black400} margin="0 0 2px 0">
                        Species
                      </Typo>
                      <Typo font={bold}>{capitalize(item.species.name)} </Typo>
                    </Flex>
                  </Flex>
                </ItemBox>
              ))
          )}
        </ItemContainer>
        <Flex width="100%" justifyContent="center" padding="12px 0">
          {prevUrl && (
            <Button
              onClick={handleBack}
              variant="blue"
              padding="10px 24px"
              width="fit-content"
              margin="0 16px 0 0"
            >
              <Typo variant="body2" color="white" font={bold}>
                back
              </Typo>
            </Button>
          )}
          <Button onClick={handleNext} variant="blue" padding="10px 24px" width="fit-content">
            <Typo variant="body2" color="white" font={bold}>
              next
            </Typo>
          </Button>
        </Flex>
        <Flex width="100%">
          <Button
            onClick={handleChoose}
            variant="green"
            width="100%"
            maxWidth="100%"
            padding="10px"
            animation={false}
          >
            <Typo color="white" font={bold}>
              Choose
            </Typo>
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

ListPokemon.propTypes = {
  expand: PropTypes.bool,
  setExpand: PropTypes.func,
  selected: PropTypes.object,
  anotherSelected: PropTypes.object,
  onSelected: PropTypes.func,
};

export default ListPokemon;
