import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BeerProvider } from "./providers/BeerContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <BeerProvider>
          <App />
        </BeerProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
