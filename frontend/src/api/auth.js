import axios from "../utils/axios";
import store from "../store/auth";

export const login = async (payload) => {
  const { data } = await axios.post("/auth/login", payload);

  const token = data.data;

  store.getState().setToken(token);

  return token;
};

export const register = async (payload) => {
  await axios.post("/auth/register", payload);
};
