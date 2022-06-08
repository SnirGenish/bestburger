import axios from "axios";
export const addResultToTopList = async (inName, inScore) => {
  const getting = await axios.get(
    "https://6298652ede3d7eea3c660322.mockapi.io/toplist"
  );
  const isInList = await getting.data.find((e) => e.name === inName);
  if (isInList) {
    let newObj = {
      id: isInList.id,
      name: isInList.name,
      score: [...isInList.score],
    };
    newObj.score.push(parseInt(inScore));
    // eslint-disable-next-line no-unused-vars
    const editing = await axios.put(
      `https://6298652ede3d7eea3c660322.mockapi.io/toplist/${isInList.id}`,
      newObj
    );
  } else {
    // eslint-disable-next-line no-unused-vars
    const adding = await axios.post(
      "https://6298652ede3d7eea3c660322.mockapi.io/toplist",
      {
        name: inName,
        score: [parseInt(inScore)],
      }
    );
  }
};
