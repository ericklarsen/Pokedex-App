import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Flex from "../components/atoms/Flex";
import Button from "../components/atoms/Button";
import Img from "../components/atoms/Img";
import styled from "styled-components";
import Card from "../components/molecules/Card/Card";
import Loading from "../components/molecules/Loading/Loading";
import Typo from "../components/atoms/Typography";
import { font, breakPoint } from "../styles/_variables";
import Footer from "../components/molecules/Footer/Footer";
import DetailPokemon from "../components/organism/DetailPokemon/DetailPokemon";
import UseGetDetailPokemonData from "../hooks/UseGetDetailPokemonData";
import FilterPokemon from "../components/organism/DetailPokemon/FilterPokemon";
import Search from "../components/molecules/Search/Search";
import NotFoundState from "../components/molecules/NotFoundState/NotFoundState";

const { bold } = font;
const { mobileXL } = breakPoint;

const Logo = styled(Img)`
  max-width: 214px;
  width: 100%;
  cursor: pointer;

  @media only screen and (max-width: ${mobileXL + 1}px) {
    max-width: 100px;
    width: 100%;
    margin-right: 10px;
  }
`;

const pokemonList = () => {
  const [loading, setLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const [selected, setSelected] = useState({});
  const [expand, setExpand] = useState(false);
  const [search, setSearch] = useState("");

  const [selectedType, setSelectedType] = useState({});

  UseGetDetailPokemonData({ setLoading, currentUrl, setNextUrl, setPrevUrl, setPokemonData });

  const handleNext = () => {
    setCurrentUrl(nextUrl);
  };

  const handleBack = () => {
    setCurrentUrl(prevUrl);
  };

  const handleSelected = (data) => {
    setExpand(true);
    setSelected(data);
  };

  return (
    <MainLayout title="Pokedex - List Pokemon">
      <Flex width="100%" padding="36px 16px" justifyContent="space-between" alignItems="center">
        <Logo src="/static/img/logo_pokemon.png" onClick={() => (window.location.href = "/")} />
        <Flex alignItems="center" wrap="wrap" justifyContent="flex-end">
          <Flex wrap="wrap" justifyContent="flex-end" alignItems="center">
            {!search && (
              <FilterPokemon
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                setCurrentUrl={setCurrentUrl}
                setNextUrl={setNextUrl}
                setPrevUrl={setPrevUrl}
                setPokemonData={setPokemonData}
                onLoading={setLoading}
              />
            )}
            {prevUrl && (
              <Button
                onClick={handleBack}
                width="fit-content"
                padding="10px 32px"
                margin="0 10px 10px 0"
              >
                <Typo variant="body2" font={bold} color="white">
                  Back
                </Typo>
              </Button>
            )}
            {nextUrl && (
              <Button
                onClick={handleNext}
                variant="green"
                width="fit-content"
                padding="10px 32px"
                margin="0 10px 10px 0"
              >
                <Typo variant="body2" font={bold} color="white">
                  Next
                </Typo>
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
      {!selectedType?.name && (
        <Flex width="100%" maxWidth="500px" margin="0 auto" padding="0 24px">
          <Search
            search={search}
            width="100%"
            setSearch={setSearch}
            setPokemonData={setPokemonData}
            setNextUrl={setNextUrl}
            setPrevUrl={setPrevUrl}
            setCurrentUrl={setCurrentUrl}
            setLoading={setLoading}
          />
        </Flex>
      )}
      {loading ? (
        <Loading />
      ) : (
        <Flex
          width="100%"
          justifyContent="space-around"
          padding="0 16px"
          style={{ marginTop: "50px", flexWrap: "wrap" }}
        >
          {pokemonData.length ? (
            pokemonData.map((item) => (
              <Card key={item.id} data={item} onClick={() => handleSelected(item)} />
            ))
          ) : (
            <Flex
              direction="column"
              width="100%"
              height="50vh"
              alignItems="center"
              justifyContent="center"
            >
              <NotFoundState />
            </Flex>
          )}
        </Flex>
      )}
      <DetailPokemon expand={expand} setExpand={setExpand} title="Detail Pokemon" data={selected} />
      <Footer position={loading ? "absolute" : "static"} />
    </MainLayout>
  );
};

pokemonList.propTypes = {};

export default pokemonList;
