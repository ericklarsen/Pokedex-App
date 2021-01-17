import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UseGetDetailPokemonData from "../../../hooks/UseGetDetailPokemonData";
import Search from "../../molecules/Search/Search";
import UseIsBigScreen from "../../../hooks/UseIsBigScreen";
import MobileVersionList from "./MobileVersionList";
import DesktopVersionList from "./DesktopVersionList";

const ListPokemon = ({ expand, setExpand, selected, anotherSelected, onSelected }) => {
  const [loading, setLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const [currentSelected, setCurrentSelected] = useState([]);

  const [search, setSearch] = useState("");

  const bigScreen = UseIsBigScreen();

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
    <>
      {bigScreen ? (
        <DesktopVersionList
          expand={expand}
          setExpand={setExpand}
          loading={loading}
          pokemonData={pokemonData}
          anotherSelected={anotherSelected}
          setCurrentSelected={setCurrentSelected}
          currentSelected={currentSelected}
          nextUrl={nextUrl}
          prevUrl={prevUrl}
          handleBack={handleBack}
          handleChoose={handleChoose}
          handleNext={handleNext}
        >
          <Search
            search={search}
            setSearch={setSearch}
            setPokemonData={setPokemonData}
            setNextUrl={setNextUrl}
            setPrevUrl={setPrevUrl}
            setCurrentUrl={setCurrentUrl}
            setLoading={setLoading}
          />
        </DesktopVersionList>
      ) : (
        <MobileVersionList
          expand={expand}
          setExpand={setExpand}
          loading={loading}
          pokemonData={pokemonData}
          anotherSelected={anotherSelected}
          setCurrentSelected={setCurrentSelected}
          currentSelected={currentSelected}
          nextUrl={nextUrl}
          prevUrl={prevUrl}
          handleBack={handleBack}
          handleChoose={handleChoose}
          handleNext={handleNext}
        >
          <Search
            search={search}
            setSearch={setSearch}
            setPokemonData={setPokemonData}
            setNextUrl={setNextUrl}
            setPrevUrl={setPrevUrl}
            setCurrentUrl={setCurrentUrl}
            setLoading={setLoading}
          />
        </MobileVersionList>
      )}
    </>
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
