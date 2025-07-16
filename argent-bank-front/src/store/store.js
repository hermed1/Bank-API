import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  // reducer est un objet qui contient tous les slices
  //La clé “reducer” n’est donc pas recopiée dans l’état
  //  elle sert juste de paramètre de construction.
  reducer: {
    user: userReducer,
  },
});

export default store;
