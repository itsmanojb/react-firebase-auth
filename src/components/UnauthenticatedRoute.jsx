import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default UnauthenticatedRoute;
