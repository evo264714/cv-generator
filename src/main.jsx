import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import CreateCV from './components/CreateCV/CreateCV';
import AuthProvider from './components/Providers/AuthProvider';
import PrivateRoute from './components/routes/PrivateRoutes';
import CvTemplate from './components/CvTemplate/CvTemplate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/generator',
        element: <PrivateRoute><CreateCV></CreateCV></PrivateRoute>
      },
      {
        path: '/templates',
        element: <CvTemplate></CvTemplate>,
        loader: () => fetch('http://localhost:2000/cv')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
