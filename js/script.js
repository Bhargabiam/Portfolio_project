/**
 * @copyright bharagbChatterjee 2023
 * @author Sadee <bhargabiam@gmail.com>
 */

"use strict";

// Light and dark mode

const themeBtn = document.querySelector("[data-theme-btn]");
const hbody = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
  hbody.dataset.theme = sessionStorage.getItem("theme");
} else {
  hbody.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
  hbody.dataset.theme =
    sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", hbody.dataset.theme);
};

themeBtn.addEventListener("click", changeTheme);
