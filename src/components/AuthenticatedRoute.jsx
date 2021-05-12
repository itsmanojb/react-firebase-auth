import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthenticatedRoute;
