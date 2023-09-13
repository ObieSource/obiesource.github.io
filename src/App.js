import React, { StrictMode } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import "./App.css";

import { Navbar } from "./components";
import { Home, About, Contact, Resources } from "./pages";

const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<Resources />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

export default App;
