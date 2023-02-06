import theme from "./theme";
// import typescriptLogo from "./typescript.svg";
import { buildResponseDom } from "./utility";

theme();

const accordions = document.querySelectorAll<HTMLDivElement>(".accordion");
accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});

const ytForm = document.getElementById("ytForm");
let responseDom = document.getElementById("responseDom");
const submitButton = document.getElementById("submit-btn");
const dlOptions = document.getElementById("dlOptions");
let loading = document.getElementById("loading");
let notLoading = document.getElementById("not-loading");

ytForm!.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();

  // @ts-ignore
  let url = ytForm!.elements["field"].value;

  // Set Loading state
  loading?.classList.remove("hidden");
  notLoading?.classList.add("hidden");
  await fetch("https://worrisome-newt-khakis.cyclic.app/api/yt", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })
    .then((response) => response.json())
    .then((data) => {
      const ResultWindow = document.createElement("div");
      ResultWindow.setAttribute(
        "class",
        "w-full pt-4 max-w-2xl mx-auto p-4 grid place-content-center gap-3"
      );
      ResultWindow.innerHTML = buildResponseDom(data);
      responseDom!.appendChild(ResultWindow);
      loading?.classList.add("hidden");
      notLoading?.classList.remove("hidden");
      // @ts-ignore
      ytForm!.elements["field"].value = "";
    })
    .catch((err) => {
      console.log(err);
      loading?.classList.add("hidden");
      notLoading?.classList.remove("hidden");
      // @ts-ignore
      ytForm!.elements["field"].value = "";
    });
});
