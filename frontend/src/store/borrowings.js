import { create } from "zustand";

const useBorrowingsStore = create((set, get) => ({
  borrowings: [],
  setBorrowings(borrowings) {
    set({ borrowings });
  },
  addBorrowing(payload) {
    const { borrowings } = get();
    const newBorrowings = [...borrowings, payload];
    set({ borrowings: newBorrowings });
  },
  updateBorrowing(borrowingId, payload) {
    const { borrowings } = get();
    const index = borrowings.findIndex(
      (borrowing) => borrowing.borrowingId === borrowingId,
    );

    if (index !== -1) return;

    const prevBorrowing = borrowings[index];

    const updateBorrowing = [...borrowings];
    updateBorrowing[index] = {
      ...prevBorrowing,
      ...payload,
    };
    set({ borrowings: updateBorrowing });
  },
  deleteBorrowing(borrowingId) {
    const { borrowings } = get();
    const filteredBorrowings = borrowings.filter(
      (borrowing) => borrowing.borrowingId !== borrowingId,
    );

    set({ borrowings: filteredBorrowings });
  },
}));

export default useBorrowingsStore;
