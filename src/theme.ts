export function initTheme(): void {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function toggle(event: MouseEvent): void {
  // @ts-ignore
  let currentTheme: string = event.target?.id;

  if (currentTheme.toLowerCase() === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else if (currentTheme.toLowerCase() === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else if (currentTheme.toLowerCase() === "system") {
    localStorage.removeItem("theme");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  //   @ts-ignore
  event.target?.parentNode.classList.toggle("hidden");
}
