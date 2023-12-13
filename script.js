const features = document.getElementById("features");
const company = document.getElementById("company");
const nav = document.querySelector("header nav");
const featuresDropdown = document.getElementById("features-dropdown");
const companyDropdown = document.getElementById("company-dropdown");
const arrowDown = document.getElementById("arrow-down");
const arrowDown2 = document.getElementById("arrow-down-2");
const menuIcon = document.querySelector("#menu-icon img");
// const menuButtons = document.querySelector("#menu-btns");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    menuIcon.src = "./images/icon-close-menu.svg";
  } else {
    menuIcon.src = "./images/icon-menu.svg";
  }
});

function toggleFeatures() {
  featuresDropdown.classList.toggle("active");
  if (featuresDropdown.classList.contains("active")) {
    arrowDown.src = "./images/icon-arrow-up.svg";
  } else {
    arrowDown.src = "./images/icon-arrow-down.svg";
  }
}
function toggleCompany() {
  companyDropdown.classList.toggle("active");
  if (companyDropdown.classList.contains("active")) {
    arrowDown2.src = "./images/icon-arrow-up.svg";
  } else {
    arrowDown2.src = "./images/icon-arrow-down.svg";
  }
}

// Eventlisteners
features.addEventListener("click", toggleFeatures);
company.addEventListener("click", toggleCompany);
arrowDown.addEventListener("click", toggleFeatures);
arrowDown2.addEventListener("click", toggleCompany);
