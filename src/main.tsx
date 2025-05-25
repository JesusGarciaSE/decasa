import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import PizzaView from "./views/MenuView.tsx";
import MainLayout from "./Layouts/MainLayout.tsx";
import Home from "./views/Home.tsx";
import MenuView from "./views/MenuView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <PizzaView />,
      },
      {
        path: "/menu",
        element: <MenuView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
