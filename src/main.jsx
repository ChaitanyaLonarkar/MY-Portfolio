import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Responsive.css";
import "./css/Preloader.css";
import "./css/Skills.css";
import "./css/About.css";
import "./css/Liquid.css";
import "./css/Project.css";
import "./css/Creative.css";
import "./css/Experience.css";








import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);
