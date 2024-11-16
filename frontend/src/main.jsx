import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider  from "./authProvider/AuthProvider";
import { Provider } from 'react-redux';
import  store  from '../src/store/index.jsx';
import "./index.css";
import Router from "./router/Router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}> {/* Wrap with Provider */}
                <AuthProvider>
                    <Toaster />
                    <RouterProvider router={Router} />
                </AuthProvider>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
