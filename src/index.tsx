import "./assets/styles.scss";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const rootDiv = document.querySelector("#root");

if (rootDiv) {
  const root = createRoot(rootDiv);
  root.render(<App />);
}
