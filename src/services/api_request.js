import axios from "axios";

const BASE_DOMAIN = "https://pokeapi.co/api";

const apiRequest = ({ method = "GET", url, data = "", params = "", headers = "" }) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  return axios({
    method,
    url,
    data,
    headers: { ...defaultHeaders, ...headers },
    params,
  });
};

module.exports = { apiRequest, BASE_DOMAIN };
