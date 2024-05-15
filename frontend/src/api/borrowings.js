import axios from "../utils/axios";
import store from "../store/borrowings";

export const createBorrowing = async (payload) => {
  const { data } = await axios.post("/borrowings", payload);

  const borrowing = data.data;

  store.getState().addBorrowing(borrowing);

  return borrowing;
};

export const updateBorrowing = async (borrowingId, payload) => {
  const { data } = await axios.patch(`/borrowings/${borrowingId}`, payload);

  const borrowing = data.data;

  store.getState().updateBorrowing(borrowingId, borrowing);

  return borrowing;
};

export const listBorrowing = async (query) => {
  const { data } = await axios.get("/borrowings", {
    params: query,
  });

  const borrowings = data.data;

  store.getState().setBorrowings(borrowings);

  return borrowings;
};

export const findBorrowing = async (borrowingId) => {
  const { data } = await axios.get(`/borrowings/${borrowingId}`);

  const borrowing = data.data;

  store.getState().updateBorrowing(borrowingId, borrowing);

  return borrowing;
};

export const deleteBorrowing = async (borrowingId) => {
  await axios.delete(`/borrowings/${borrowingId}`);

  store.getState().deleteBorrowing(borrowingId);
};
