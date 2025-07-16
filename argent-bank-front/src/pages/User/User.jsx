import './User.scss';
import { useSelector } from 'react-redux';

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

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className='edit-button'>Edit Name</button>
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
