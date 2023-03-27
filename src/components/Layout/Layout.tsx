import './Layout.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { FAVORITES, PHOTOS } from '../../constants/constants';

function Layout(): JSX.Element {
  return (
    <>
      <header>
        <NavLink to="/">{PHOTOS}</NavLink>
        <NavLink to="/favorites">{FAVORITES}</NavLink>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
