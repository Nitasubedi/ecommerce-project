import create from 'zustand';

const useStore = create((set) => ({
  user: null, 
  setUser: (user) => set({ user }), // Function to update user data
}));

export default useStore;
