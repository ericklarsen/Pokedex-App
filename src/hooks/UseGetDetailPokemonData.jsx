import { useEffect } from "react";
import { requestData } from "../helpers/global_helper";

const UseGetDetailPokemonData = ({
  setLoading,
  currentUrl,
  setNextUrl,
  setPrevUrl,
  setPokemonData,
}) => {
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let response = await requestData(currentUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemonDetail(response.results);
      setLoading(false);
    }
    currentUrl && fetchData();
  }, [currentUrl]);

  const loadPokemonDetail = async (data) => {
    let _data = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await requestData(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_data);
  };
  return;
};

UseGetDetailPokemonData.propTypes = {};

export default UseGetDetailPokemonData;
