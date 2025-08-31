import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userInfo: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },

    updateUserInfo(state, action) {
      state.userInfo = {
        ...(state.userInfo || {}),
        ...action.payload,
      };
    },
    logout(state) {
      state.token = null;
      state.userInfo = null;
    },
  },
});

//redux génère automatiquement les actions basées sur les reducers : userSlice.actions.setToken
// tu peux les utiliser dans ton composant avec useDispatch
// on récupère la propriété setToken de userSlice.actions
export const { setToken, setUserInfo, updateUserInfo, logout } =
  userSlice.actions;
// createSlice renvoie un objet qui contient :
// {
//   name: 'user',        // le nom que tu as donné
//   reducer: ƒ(),        // la fonction unique reducer générée
//   actions: { … }       // toutes les actions (setToken, …)
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Le reducer (= userSlice.reducer)

// Redux l’utilise pour gérer tout ce qu’il y a dans initialState.
// Par défaut, c’est
// state = { token: null }
// Quand tu fais un dispatch(setToken('abcd')), ça change la valeur à
// state = { token: 'abcd' }

export default userSlice.reducer;
