import "../styles/main.scss";
import Tab from "./components/tabs";

import "./components/slider";

document.addEventListener("DOMContentLoaded", () => {
  const tabs = new Tab();
  tabs?.init();
});
