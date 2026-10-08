// Validates the contact form and shows a local preview if valid
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const result = document.getElementById("formResult");

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  result.textContent = "";

  let valid = true;
  if (name === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    valid = false;
  }
  if (!emailOk) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  }
  if (message === "") {
    document.getElementById("messageError").textContent = "Please enter a message.";
    valid = false;
  }
  if (!valid) {
    return;
  }

  result.textContent = "Data validated (not sent). Name: " + name + " | Email: " + email + " | Message: " + message;
});

// Theme switch: toggles dark mode and updates the button text
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  const dark = document.body.classList.toggle("dark");
  themeBtn.textContent = dark ? "Light mode" : "Dark mode";
});

// Mobile menu: opens and closes the navigation on small screens
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector("nav");
menuBtn.addEventListener("click", function () {
  const open = navMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.textContent = open ? "Close" : "Menu";
});

// Expandable content: shows or hides project details
document.querySelectorAll(".toggle-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const details = btn.nextElementSibling;
    const isHidden = details.hidden;
    details.hidden = !isHidden;
    btn.setAttribute("aria-expanded", isHidden);
    btn.textContent = isHidden ? "Hide details" : "Show details";
  });
});