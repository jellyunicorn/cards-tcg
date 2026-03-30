import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css';
import AboutUs from './pages/AboutUs';
import Articles from './pages/Articles';
import CreateArticle from './pages/CreateArticle';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import ArticleDetail from './pages/ArticleDetail';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/articles/:slug",
    element: <ArticleDetail />,
  },
  {
    path: "/create-article",
    element: <CreateArticle />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
