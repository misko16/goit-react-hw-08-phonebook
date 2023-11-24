import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const email = user.email;

  return (
    <div className="user-menu-container">
      <p className="welcome-text">{email}</p>
      <button className="logout-button" type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
