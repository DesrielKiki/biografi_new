document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const jumbotron = document.querySelector(".jumbotron");
  const navbar = document.querySelector(".navbar");
  const profileCard = document.querySelector(".profileCard");

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    enableDarkMode();
  } else {
    document.body.classList.remove("dark-mode");
    profileCard.classList.add("light-mode");
    disableDarkMode();
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      enableDarkMode();
    } else {
      localStorage.setItem("darkMode", "disabled");
      disableDarkMode();
    }
  });

  function enableDarkMode() {
    jumbotron.classList.remove("bg-light");
    jumbotron.classList.add("bg-dark");
    jumbotron.style.color = "white";
    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("navbar-dark", "bg-dark");
    profileCard.classList.remove("light-mode");
    profileCard.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
  }

  function disableDarkMode() {
    jumbotron.classList.remove("bg-dark");
    jumbotron.classList.add("bg-light");
    jumbotron.style.color = "black";
    navbar.classList.remove("navbar-dark", "bg-dark");
    navbar.classList.add("navbar-light", "bg-light");
    profileCard.classList.remove("dark-mode");
    profileCard.classList.add("light-mode");
    darkModeToggle.textContent = "🌙";
  }
});
