import axios from "axios";
export const getList = async () => {
  const getting = await axios.get(
    "https://6298652ede3d7eea3c660322.mockapi.io/toplist"
  );
  return getting.data;
};
