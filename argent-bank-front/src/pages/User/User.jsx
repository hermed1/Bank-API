import { Link, Navigate } from 'react-router-dom';
import './User.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setUserInfo } from '../../store/userSlice';

// state = objet racine du store redux
// user = clé déclarée dans configureStore
// Quand Redux crée le store, il fait
// Il appelle chaque reducer avec state = undefined

// Un reducer en JS fait

// function userReducer(state = { token: null }, action) {
//   // si state est undefined, il prend { token: null }
//   // ... puis il traite les actions
//   return state;
// }
// Donc, par défaut, il retourne l’objet initialState (ici { token: null })

// C’est ça la base du fonctionnement.
// Le reducer garde en mémoire ce initialState
// et dès qu’il est appelé la première fois, il te le renvoie.
// Voilà pourquoi state.user.token existe tout de suite, même sans action.

const User = () => {
  const token = useSelector((state) => state.user.token);
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    axios
      .post(
        'http://localhost:3001/api/v1/user/profile',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle the response data if needed
        console.log(response.data.body);
        dispatch(setUserInfo(response.data.body));
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, [token]);

  if (!token) {
    return <Navigate to='/login' replace />;
  }
  if (!userInfo) {
    return <div>Loading profile…</div>;
  }
  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {userInfo.firstName} {userInfo.lastName}!
        </h1>
        <Link to='/profile/edit'>
          <button className='edit-button'>Edit Name</button>
        </Link>
      </div>

      <h2 className='sr-only'>Accounts</h2>

      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
          <p className='account-amount'>$2,082.79</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>

      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
          <p className='account-amount'>$10,928.42</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>

      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
          <p className='account-amount'>$184.30</p>
          <p className='account-amount-description'>Current Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
    </main>
  );
};
export default User;
