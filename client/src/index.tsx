import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './components/login/login';
import Register from './components/register/register';
import redirect from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/home/login',
    element: <Login></Login>
  },
  {
    path: '/home/register',
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );