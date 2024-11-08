import './App.css';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/Public/LoginPage/LoginPage';
import RegisterPage from './pages/Public/RegisterPage/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import Movie from './pages/MainPage/Movie/Movie';
import Lists from './pages/MainPage/Movie/Lists/Lists';
import Form from './pages/MainPage/Movie/Form/Form';

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
      //   path: '/main/dashboard',
      //   element: <Dashboard />,
      // },
      {
        path: '/main/movies',
        element: <Movie />,
        children: [
          {
            path: '/main/movies',
            element: <Lists />,
          },
          {
            path: '/main/movies/form/:movieId?',
            element: <Form />,
          },
        ],
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
