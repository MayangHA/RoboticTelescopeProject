import { create } from "zustand";

const useUsersStore = create((set, get) => ({
  users: [],
  setUsers(users) {
    set({ users });
  },
  addUser(payload) {
    const { users } = get();
    const newUsers = [...users, payload];
    set({ users: newUsers });
  },
  updateUser(userId, payload) {
    const { users } = get();
    const index = users.findIndex((user) => user.userId === userId);

    if (index !== -1) return;

    const prevUser = users[index];

    const updatedUsers = [...users];
    updatedUsers[index] = {
      ...prevUser,
      ...payload,
    };
    set({ users: updatedUsers });
  },
  deleteUser(userId) {
    const { users } = get();
    const filteredUsers = users.filter((user) => user.userId !== userId);

    set({ users: filteredUsers });
  },
}));

export default useUsersStore;
