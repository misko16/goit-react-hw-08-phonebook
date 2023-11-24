import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import UserMenu from '../UserMenu';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="container">
      <header>
        <div className='navigation-container'>
          <nav className="nav-bar"> 
            {isLoggedIn && (
              <NavLink to="/contacts" className="nav-link" activeClassName="active">
                Contacts
              </NavLink>
            )}
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <div className="auth-links"> 
                <NavLink to="/register" className="nav-link" activeClassName="active">
                  Register
                </NavLink>
                <NavLink to="/login" className="nav-link" activeClassName="active">
                  Login
                </NavLink>
              </div>
            )}
          </nav>
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
