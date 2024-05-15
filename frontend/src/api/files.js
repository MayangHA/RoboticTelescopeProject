import axios from "axios";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("files", file);

  const { data } = await axios.post("/files", formData);

  return data.data;
};

export const getStats = async () => {
  const { data } = await axios.get("/files/stats");

  return data;
};
