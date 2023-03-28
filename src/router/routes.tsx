import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { ReactRoute } from '../interfaces/ReactRoute';
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
      }
    ]
  },
  {
    path: '*',
    element: <div>Not found</div>
  }
];

export const router = createBrowserRouter(routes);
