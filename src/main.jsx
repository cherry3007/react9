import { StrictMode} from 'react'
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Advantage from './pages/Advantage.jsx';
import Club from './pages/Club.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: '',
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "advantage",
    element: <Advantage/>,
  },
  {
    path: "club",
    element: <Club/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>,
)
