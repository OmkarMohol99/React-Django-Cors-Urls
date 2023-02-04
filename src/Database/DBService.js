import axios from "axios";

const url = "http://127.0.0.1:8000/app1/studentApi/";

export const postDataToDatabase = async (data) => {
  try {
    let response = await axios.post(url, data);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getDataFromDatabase = () => {
  return axios.get(url);
};

export const deleteSelectedDataFromDatabase = (sId) => {
  console.log(url + sId);
  return axios.delete(url + sId + "/");
};

export const getSpecificData = (sId) => {
  //   console.log("get", url + sId + "/");
  return axios.get(url + sId + "/");
};

export const updateData = (uData) => {
  console.log("Url", url + uData.sId + "/", uData);
  return axios.put(url + uData.sId + "/", uData);
};
