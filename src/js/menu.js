const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = menu ? menu.querySelectorAll("a") : [];

const articlesToggle = document.querySelector(".menu__toggle");
const articlesSublist = document.querySelector("#submenu-articles");

function openMenu() {
  menuBtn.classList.add("is-open");
  menuBtn.setAttribute("aria-expanded", "true");
  menu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  menuBtn.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
  closeArticlesSubmenu();
}

function toggleMenu() {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMenu();
  else openMenu();
}

function openArticlesSubmenu() {
  if (!articlesToggle || !articlesSublist) return;

  articlesToggle.setAttribute("aria-expanded", "true");
  articlesSublist.hidden = false;

  requestAnimationFrame(() => {
    articlesSublist.classList.add("is-open");
  });
}

function closeArticlesSubmenu() {
  if (!articlesToggle || !articlesSublist) return;

  articlesToggle.setAttribute("aria-expanded", "false");
  articlesSublist.classList.remove("is-open");

  window.setTimeout(() => {
    articlesSublist.hidden = true;
  }, 350);
}

function toggleArticlesSubmenu() {
  const isOpen = articlesToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) closeArticlesSubmenu();
  else openArticlesSubmenu();
}

/* Events */
if (menuBtn && menu) {
  menuBtn.addEventListener("click", toggleMenu);

  // clique sur un lien -> ferme
  menuLinks.forEach((a) => a.addEventListener("click", closeMenu));

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

if (articlesToggle && articlesSublist) {
  articlesToggle.addEventListener("click", toggleArticlesSubmenu);
}
