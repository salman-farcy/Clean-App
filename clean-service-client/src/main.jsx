import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from 'react-hot-toast';

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routers";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routers} />
    </AuthProvider>
    <Toaster position="top-right" reverseOrder={false}/>
  </StrictMode>
);
