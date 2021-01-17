import React from "react";
import PropTypes from "prop-types";
import Bottomsheet from "../../molecules/Bottomsheet/Bottomsheet";
import Flex from "../../atoms/Flex";
import styled from "styled-components";
import { blackShades, font } from "../../../styles/_variables";
import Spinner from "../../atoms/Spinner";
import Img from "../../atoms/Img";
import Typo from "../../atoms/Typography";
import { capitalize } from "../../../helpers/global_helper";
import Button from "../../atoms/Button";

const { black200, black400 } = blackShades;
const { bold } = font;

const ItemContainer = styled(Flex)`
  width: 100%;
  min-height: 64%;
  max-height: 64%;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 16px;
  scrollbar-width: thin;
  padding-right: 8px;
`;

const ItemBox = styled(Flex)`
  width: 100%;
  border: 1px solid ${black200};
  border-radius: 8px;
  padding: 0 14px 10px 14px;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  animation: fade 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  flex-shrink: 0;

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

const MobileVersion = ({
  expand,
  setExpand,
  loading,
  pokemonData,
  anotherSelected,
  setCurrentSelected,
  currentSelected,
  nextUrl,
  prevUrl,
  handleBack,
  handleChoose,
  handleNext,
  children,
}) => {
  return (
    <Bottomsheet isVisible={expand} handleVisible={setExpand} title="List Pokemon" height="90vh">
      <Flex
        direction="column"
        width="100%"
        padding="0 20px 20px 20px"
        height="90%"
        justifyContent="space-between"
      >
        {children}
        <ItemContainer>
          {loading ? (
            <Flex width="100%" height="400px" justifyContent="center" alignItems="center">
              <Spinner />
            </Flex>
          ) : pokemonData.length > 0 ? (
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
                    <Img src={item.sprites.front_default} maxWidth="55px" alt="pokemon" />
                  </Flex>
                  <Flex width="100%" wrap="wrap" justifyContent="space-between">
                    <Flex width="25%" direction="column" margin="10px 0 0 24px">
                      <Typo variant="caption" color={black400} margin="0 0 2px 0">
                        Name
                      </Typo>
                      <Typo font={bold}>{capitalize(item.name)}</Typo>
                    </Flex>
                    <Flex width="25%" direction="column" margin="10px 0 0 24px">
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
                    <Flex width="25%" direction="column" margin="10px 0 0 24px">
                      <Typo variant="caption" color={black400} margin="0 0 2px 0">
                        Species
                      </Typo>
                      <Typo font={bold}>{capitalize(item.species.name)} </Typo>
                    </Flex>
                  </Flex>
                </ItemBox>
              ))
          ) : (
            <Flex
              direction="column"
              width="100%"
              height="400px"
              justifyContent="center"
              alignItems="center"
            >
              <Img
                src="/static/img/ic_pokemon_logo_outline.png"
                maxWidth="200px"
                style={{ opacity: 0.5 }}
              />
              <Typo color={black400} margin="8px 0 0 0">
                Not Found
              </Typo>
            </Flex>
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
          {nextUrl && (
            <Button onClick={handleNext} variant="blue" padding="10px 24px" width="fit-content">
              <Typo variant="body2" color="white" font={bold}>
                next
              </Typo>
            </Button>
          )}
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
    </Bottomsheet>
  );
};

MobileVersion.propTypes = {
  expand: PropTypes.bool,
  setExpand: PropTypes.func,
  loading: PropTypes.bool,
  pokemonData: PropTypes.array,
  anotherSelected: PropTypes.object,
  setCurrentSelected: PropTypes.func,
  currentSelected: PropTypes.object,
  nextUrl: PropTypes.any,
  prevUrl: PropTypes.any,
  handleBack: PropTypes.func,
  handleChoose: PropTypes.func,
  handleNext: PropTypes.func,
  children: PropTypes.node,
};

export default MobileVersion;
