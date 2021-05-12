import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.log('====================================');
      console.log('Failed to log out');
      console.log(error);
      console.log('====================================');
    }
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <p>Email: {currentUser.email}</p>
      <Link to="/edit-profile">Edit</Link>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
