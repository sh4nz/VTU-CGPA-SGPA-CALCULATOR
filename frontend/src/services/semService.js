import axios from "axios";

export const getSubjects = async (scheme, sem) => {
  const { data } = await axios.get(`/api/sems/scheme/${scheme}/sem/${sem}`);
  console.log(data)
  return data;
};

export const getById = async (semId) => {
  const { data } = await axios.get("/api/sems/" + semId);
  return data;
};
