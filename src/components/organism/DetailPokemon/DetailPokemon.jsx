import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "../../molecules/Modal/Modal";
import Flex from "../../atoms/Flex";
import { requestData } from "../../../helpers/global_helper";
import Spinner from "../../atoms/Spinner";
import Bottomsheet from "../../molecules/Bottomsheet/Bottomsheet";
import UseIsBigScreen from "../../../hooks/UseIsBigScreen";
import MobileVersion from "./MobileVersion";
import DesktopVersion from "./DesktopVersion";

const DetailPokemon = ({ expand, setExpand, title, data }) => {
  const [loading, setLoading] = useState(true);
  const [abilities, setAbilities] = useState([]);

  const bigScreen = UseIsBigScreen();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await loadAbilitesDetail(data.abilities);
      setLoading(false);
    }

    expand && fetchData();
  }, [expand]);

  const loadAbilitesDetail = async (data) => {
    let _data = await Promise.all(
      data.map(async (item) => {
        let record = await requestData(item.ability.url);
        return record;
      })
    );
    setAbilities(_data);
  };

  if (bigScreen) {
    return (
      <Modal isVisible={expand} handleVisible={setExpand} title={title}>
        {!loading ? (
          <DesktopVersion data={data} abilities={abilities} />
        ) : (
          <Flex width="100%" height="600px" justifyContent="center" alignItems="center">
            <Spinner />
          </Flex>
        )}
      </Modal>
    );
  }
  return (
    <Bottomsheet isVisible={expand} handleVisible={setExpand}>
      {!loading ? (
        <MobileVersion data={data} abilities={abilities} />
      ) : (
        <Flex width="100%" height="600px" justifyContent="center" alignItems="center">
          <Spinner />
        </Flex>
      )}
    </Bottomsheet>
  );
};

DetailPokemon.propTypes = {
  expand: PropTypes.bool,
  setExpand: PropTypes.func,
  title: PropTypes.any,
  data: PropTypes.object,
};

export default DetailPokemon;
