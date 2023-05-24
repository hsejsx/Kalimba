import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Music from './pages/Music.jsx';
import Edit from './pages/Edit.jsx';
import Knowhow from './pages/Knowhow.jsx';
import MusicDetail from './pages/MusicDetail.jsx';
import KnowhowDetail from './pages/KnowhowDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'music',
        element: <Music />,
      },
      {
        path: 'music/:id',
        element: <MusicDetail />,
      },
      {
        path: 'knowhow',
        element: <Knowhow />,
      },
      {
        path: 'knowhow/:id',
        element: <KnowhowDetail />,
      },
      {
        path: 'edit',
        element: <Edit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
