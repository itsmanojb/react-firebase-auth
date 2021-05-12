import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import Signup from './views/Signup';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <AuthenticatedRoute exact path="/" component={Dashboard} />
          <UnauthenticatedRoute path="/signup" component={Signup} />
          <UnauthenticatedRoute path="/login" component={Login} />
          {/* <Route path="/" component={Login} /> */}
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
