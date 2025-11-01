import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx"; // importa el App verdadero
import "./app.css"; // importa estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);