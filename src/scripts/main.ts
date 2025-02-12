import "../styles/main.scss";
import Tab from "./components/tabs";
import "./components/slider";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  if (typeof Tab === "function") {
    const tabs = new Tab();
    tabs?.init();
  }

  if (typeof Lenis === "function") {
    new Lenis({
      autoRaf: true,
    });
  }
});
