import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './components2/login/login';
import Register from './components2/register/register';
import Dashboard from './components2/dashboard/dashboard';
import { useNavigate } from 'react-router-dom';
import Redirect from './components/redirect/redirect';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Redirect></Redirect>
  },
  {
    path: '/home/login',
    element: <Login></Login>
  },
  {
    path: '/home/register',
    element: <Register></Register>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );