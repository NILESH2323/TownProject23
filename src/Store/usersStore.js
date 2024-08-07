import { create } from "zustand";

const useUserStore = create((set) => ({
users: [],
createUser: (user) => set(state => ({users: [user, ...state.users]})),
deleteUser: (id) => set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
// addComment
  setUsers: (users) => set({ users })}))

export default useUserStore;