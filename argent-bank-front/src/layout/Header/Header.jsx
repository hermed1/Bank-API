import './Header.css';
import logo from '../../../public/assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const userInfos = useSelector((state) => state.user.userInfo);
  console.log('Header userInfos:', userInfos);
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
      <div className='main-nav-items'>
        {userInfos ? (
          <>
            <Link className='main-nav-item' to='/profile'>
              <i class='fa fa-user-circle'></i>
              {userInfos.firstName}
            </Link>
            <Link className='main-nav-item' to='/'>
              <i className='fa fa-sign-out'></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className='main-nav-item' to='/login'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
