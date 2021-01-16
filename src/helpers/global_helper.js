import { apiRequest } from "../services/api_request";

export const requestData = (url) => {
  return apiRequest({ url: url })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const capitalize = (data) => {
  return data.charAt(0).toUpperCase() + data.slice(1);
};
