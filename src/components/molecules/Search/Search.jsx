import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input";
import Img from "../../atoms/Img";
import { requestData } from "../../../helpers/global_helper";

const Search = ({
  search,
  setSearch,
  setPokemonData,
  setNextUrl,
  setPrevUrl,
  setCurrentUrl,
  setLoading,
  width,
}) => {
  useEffect(() => {
    if (search.length) {
      setCurrentUrl("");
      setNextUrl("");
      setPrevUrl("");
    } else {
      setCurrentUrl("https://pokeapi.co/api/v2/pokemon/");
    }
    const delayDebounceFn = setTimeout(async () => {
      if (search.length) {
        setLoading(true);
        const response = await requestData(
          "https://pokeapi.co/api/v2/pokemon/" + search.toLowerCase()
        );
        setLoading(false);
        if (response instanceof Error) {
          setPokemonData([]);
          return;
        }
        setPokemonData([response]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <Input
      width={width}
      placeholder="ID/Pokemon Name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    >
      {search.length ? (
        <Img
          src="/static/svg/ic_close.svg"
          width="18px"
          style={{ cursor: "pointer", opacity: 0.5 }}
          onClick={() => setSearch("")}
          alt="close-button"
        />
      ) : (
        <Img
          src="/static/svg/ic_search_black.svg"
          width="18px"
          style={{ cursor: "pointer", opacity: 0.5 }}
          alt="search-button"
        />
      )}
    </Input>
  );
};

Search.propTypes = {
  search: PropTypes.any,
  width: PropTypes.any,
  setSearch: PropTypes.func,
  setPokemonData: PropTypes.func,
  setNextUrl: PropTypes.func,
  setPrevUrl: PropTypes.func,
  setCurrentUrl: PropTypes.func,
  setLoading: PropTypes.func,
};

export default Search;
