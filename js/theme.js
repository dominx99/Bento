let darkTheme = localStorage.getItem("darkTheme");
const themeToggle = document.querySelector("#themeButton");

const enableDark = () => {
  document.body.classList.add("darktheme");
  localStorage.setItem("darkTheme", "enabled");
  themeToggle.innerHTML = `<i id="themeButton__icon" data-feather="sun"></i>`;
  feather.replace();
};

const disableDark = () => {
  document.body.classList.remove("darktheme");
  localStorage.setItem("darkTheme", null);
  themeToggle.innerHTML = `<i id="themeButton__icon" data-feather="moon"></i>`;
  feather.replace();
};

if (darkTheme === "enabled") {
  enableDark();
} else {
  disableDark();
}

themeToggle.addEventListener("click", () => {
  darkTheme = localStorage.getItem("darkTheme");
  if (darkTheme !== "enabled") {
    enableDark();
  } else {
    disableDark();
  }
});
