import { AuthProvider } from './contexts/AuthContext';
import Signup from './views/Signup';

function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}

export default App;
