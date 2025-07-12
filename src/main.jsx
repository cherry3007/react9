import React, { StrictMode, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Loader from './pages/Loader.jsx'; 

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Advantage = lazy(() => import('./pages/Advantage.jsx'));
const Club = lazy(() => import('./pages/Club.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '100px', color: '#0077cc' }}>
    <h1>404</h1>
    <p>Упс! Страница не найдена 😥</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'advantage', element: <Advantage /> },
      { path: 'club', element: <Club /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> }, // Страница 404
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
