import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { ReactRoute } from '../interfaces/ReactRoute';
import NotFound from '../pages/404/404';
import Favorites from '../pages/Favorites/Favorites';
import Photo from '../pages/Photo/Photo';
import Photos from '../pages/Photos/Photos';

const routes: ReactRoute[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Photos />,
        title: 'Photos'
      },
      {
        path: '/favorites',
        element: <Favorites />,
        title: 'Favorites'
      },
      {
        path: 'photos/:id',
        element: <Photo />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
