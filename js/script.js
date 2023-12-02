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

// Tab part

const tabBtn = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let [lastActiveTabBtn] = tabBtn;

tabBtn.forEach((item) => {
  item.addEventListener("click", function () {
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const tabContent = document.querySelector(
      `[data-tab-content="${item.dataset.tabBtn}"]`
    );
    tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = tabContent;
    lastActiveTabBtn = this;
  });
});
