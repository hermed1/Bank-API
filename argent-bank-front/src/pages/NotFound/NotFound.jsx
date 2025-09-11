import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <main className='main bg-dark notfound'>
      <section className='notfound__content'>
        <h1 className='notfound__code'>404</h1>
        <p className='notfound__title'>Page not found</p>
        <p className='notfound__hint'>
          Sorry, the page you are looking for doesn’t exist.
        </p>

        <div className='notfound__actions'>
          <Link to='/' className='home-button'>
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
