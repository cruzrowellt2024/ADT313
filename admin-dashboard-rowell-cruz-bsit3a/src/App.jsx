import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/Public/LoginPage/LoginPage';
import RegisterPage from './pages/Public/RegisterPage/RegisterPage';
import Dashboard from './pages/MainPage/Dashboard/Dashboard';
import MainPage from './pages/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
    children: [
      {
        path: '/main/dashboard',
        element: <Dashboard /> ,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
