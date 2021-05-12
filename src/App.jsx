import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import Signup from './views/Signup';
import Login from './views/Login';
import ResetPassword from './views/ResetPassword';
import EditProfile from './views/EditProfile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <AuthenticatedRoute exact path="/" component={Dashboard} />
          <AuthenticatedRoute
            exact
            path="/edit-profile"
            component={EditProfile}
          />
          <UnauthenticatedRoute path="/signup" component={Signup} />
          <UnauthenticatedRoute path="/login" component={Login} />
          <UnauthenticatedRoute
            path="/reset-password"
            component={ResetPassword}
          />
          {/* <Route path="/" component={Login} /> */}
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
