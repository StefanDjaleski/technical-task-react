import { Outlet } from 'react-router-dom';

function Layout(): JSX.Element {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
}

export default Layout;
