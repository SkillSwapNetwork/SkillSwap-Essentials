const toggler = document.getElementById("theme-toggle");

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  // Save the theme preference to localstorage
  const isDarkModeEnabled = document.body.classList.contains("dark");
  localStorage.setItem("darkmode", isDarkModeEnabled);
}

toggler.addEventListener("change", toggleDarkMode);

window.addEventListener("load", () => {
  // Retrieve the theme preference from localstorage
  const isDarkModeEnabled = localStorage.getItem("darkmode");

  // Set the theme based on the saved preference
  if (isDarkModeEnabled === "true") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
