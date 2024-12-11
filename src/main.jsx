import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NavBar from "./components/NavBar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";
import SignupForm from "./components/SignupForm.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import CreateProjectPage from "./pages/CreateProjectPage.jsx";
import DecidingPage from "./pages/DecidingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/projects", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/create-project", element: <CreateProjectPage />},
      { path: "/about", element: <AboutPage />},
      { path: "/contact", element: <ContactPage />},
      { path: "/", element: <LoginPage />},
      { path: "/login", element: <LoginPage />},
      { path: "/project", element: <ProjectForm />},
      { path: "/deciding", element: <DecidingPage />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    {/*He we wrap our app in the router provider so they render */} 
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
    );