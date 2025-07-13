import './Header.css';
import logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to='/'>
        <img
          className='main-nav-logo-image'
          src={logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {user ? (
          <>
            <Link className='main-nav-item' to='/profile'>
              <i className='fa fa-user-circle'></i>
              {user.firstName}
            </Link>
            <Link className='main-nav-item' to='/sign-in'>
              <i className='fa fa-sign-out'></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className='main-nav-item' to='/sign-in'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
