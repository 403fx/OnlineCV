import "./style.css";

const menuTrigger = document.querySelector("[data-menu-trigger]");
const menu = document.querySelector("[data-menu]");

menuTrigger?.addEventListener("click", () => {
  const expanded = menuTrigger.getAttribute("aria-expanded") === "true";
  menuTrigger.setAttribute("aria-expanded", String(!expanded));
  menu?.toggleAttribute("hidden", expanded);
});
