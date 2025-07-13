import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Home from '../../pages/Home/Home';
import Signin from '../../pages/Signin/Signin';
import User from '../../pages/User/User';
// import NotFound from '../../pages/NotFound/NotFound';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sign-in', element: <Signin /> },
      { path: '/profile', element: <User /> },
      //   { path: '*', element: <NotFound /> },
    ],
  },
]);

export default Router;
