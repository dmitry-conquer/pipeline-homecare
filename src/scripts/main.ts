import "../styles/main.scss";
import TabsCollection from "./components/tabs";
import "./components/slider";
import Lenis from "lenis";

document.addEventListener("DOMContentLoaded", () => {
  const tabs = new TabsCollection();
  tabs.init?.();

  new Lenis({
    autoRaf: true,
  });
});
