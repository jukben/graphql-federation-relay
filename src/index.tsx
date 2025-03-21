import * as React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import App from "./components/App";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
