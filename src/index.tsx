import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, Router, RouterProvider } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import  KeycloakUserService from "./components/Login/KeycloakUserService";
import "./index.css";

import Layout from "./pages/layout/Layout";
import Chat from "./pages/chat/Chat";



initializeIcons();

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Chat />
            },
            {
                path: "qa",
                lazy: () => import("./pages/oneshot/OneShot")
            },
            {
                path: "*",
                lazy: () => import("./pages/NoPage")
            }
        ]
    }
    
]);

// const root = ReactDOM.createRoot(document.getElementById("root")as HTMLElement);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    
);
// KeycloakUserService.initKeycloak(router);