import "./style.css";
import typescriptLogo from "./typescript.svg";
import { initTheme, toggle } from "./theme";

initTheme();

document
  .querySelector<HTMLButtonElement>("#themeSwitch")
  ?.addEventListener("click", () => {
    document
      .querySelector<HTMLUListElement>("#themeOptions")
      ?.classList.toggle("hidden");
  });

document
  .querySelector<HTMLUListElement>("#themeOptions")
  ?.addEventListener("click", (event) => toggle(event));

const accordions = document.querySelectorAll<HTMLDivElement>(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});
