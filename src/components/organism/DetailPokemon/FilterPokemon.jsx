import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "../../molecules/Modal/Modal";
import styled from "styled-components";
import Flex from "../../atoms/Flex";
import Button from "../../atoms/Button";
import Typo from "../../atoms/Typography";
import { font } from "../../../styles/_variables";
import { requestData, capitalize } from "../../../helpers/global_helper";
import Img from "../../atoms/Img";
import Spinner from "../../atoms/Spinner";

const { bold } = font;

const Container = styled(Flex)`
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  max-height: 400px;
  min-height: 400px;
  overflow-y: auto;
  scrollbar-width: thin;
`;

const FilterPokemon = ({
  selectedType,
  setSelectedType,
  setCurrentUrl,
  setNextUrl,
  setPrevUrl,
  setPokemonData,
  onLoading,
}) => {
  const [typeList, setTypeList] = useState([]);
  const [expandFilter, setExpandFilter] = useState(false);

  const [loading, setLoading] = useState(true);

  const handleFilter = async () => {
    setExpandFilter(true);
    if (!typeList.length) {
      setLoading(true);
      const response = await requestData("https://pokeapi.co/api/v2/type");
      setTypeList(response.results);
      setLoading(false);
    }
  };

  const handleSelected = (data) => {
    setSelectedType(data);
    setExpandFilter(false);
  };

  const handleClearFilter = () => {
    setSelectedType({});
    setCurrentUrl("https://pokeapi.co/api/v2/pokemon/");
  };

  useEffect(() => {
    setCurrentUrl(null);
    setNextUrl(null);
    setPrevUrl(null);
    async function fetchData() {
      onLoading(true);
      let response = await requestData(selectedType.url);
      await loadPokemonDetail(response.pokemon);
      onLoading(false);
    }
    selectedType?.url && fetchData();
  }, [selectedType]);

  const loadPokemonDetail = async (data) => {
    let _data = await Promise.all(
      data.map(async (item) => {
        let record = await requestData(item.pokemon.url);
        return record;
      })
    );
    setPokemonData(_data);
  };
  return (
    <>
      <Button
        onClick={handleFilter}
        variant="purple"
        width="fit-content"
        padding="10px 16px"
        margin="0 10px 10px 0"
      >
        <Flex width="100px" justifyContent="space-between" alignItems="center">
          <Typo variant="body2" font={bold} color="white">
            Filter
          </Typo>
          <Img src="/static/svg/ic_filter.svg" width="20px" />
        </Flex>
      </Button>
      {selectedType?.url && (
        <Button
          onClick={handleClearFilter}
          variant="purple"
          width="fit-content"
          padding="10px 16px"
          margin="0 10px 10px 0"
        >
          <Flex width="120px" justifyContent="space-between" alignItems="center">
            <Flex direction="row" alignItems="center">
              <Typo variant="caption" color="white" margin="0 6px 0 0">
                Type :
              </Typo>
              <Typo variant="body2" font={bold} color="white">
                {capitalize(selectedType.name)}
              </Typo>
            </Flex>
            <Img
              src="/static/svg/ic_close.svg"
              width="20px"
              style={{ filter: "brightness(250%)" }}
            />
          </Flex>
        </Button>
      )}
      <Modal isVisible={expandFilter} handleVisible={setExpandFilter} title="Filter by type">
        {loading ? (
          <Flex width="100%" height="400px" alignItems="center" justifyContent="center">
            <Spinner />
          </Flex>
        ) : (
          <Container>
            {typeList.map((item, key) => (
              <Button
                variant={item.name === selectedType.name && "orange"}
                key={key}
                width="120px"
                margin="10px"
                onClick={() => handleSelected(item)}
              >
                <Flex direction="column">
                  <Typo variant="caption" color="white" margin="0 0 2px 0">
                    Type
                  </Typo>
                  <Typo variant="h6" font={bold} color="white">
                    {capitalize(item.name)}
                  </Typo>
                </Flex>
              </Button>
            ))}
          </Container>
        )}
      </Modal>
    </>
  );
};

FilterPokemon.propTypes = {
  selectedType: PropTypes.object,
  setSelectedType: PropTypes.func,
  setCurrentUrl: PropTypes.func,
  setNextUrl: PropTypes.func,
  setPrevUrl: PropTypes.func,
  setPokemonData: PropTypes.func,
  onLoading: PropTypes.func,
};

export default FilterPokemon;
