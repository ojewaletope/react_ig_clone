import React, {lazy, Suspense} from 'react'
import './App.css';
import Loading from "./components/shared/loading/loading";

const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
      <Suspense fallback={<Loading height={50} width={50}/>}>
        <p>Content</p>
    </Suspense>
  );
}

export default App;
