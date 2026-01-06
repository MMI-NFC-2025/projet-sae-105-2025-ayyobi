const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = menu ? menu.querySelectorAll("a") : [];

/* Sous-menu Articles */
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

  // referme aussi le sous-menu
  closeArticlesSubmenu();
}

function toggleMenu() {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMenu();
  else openMenu();
}

/* --- Sous-menu Articles --- */
function openArticlesSubmenu() {
  if (!articlesToggle || !articlesSublist) return;

  articlesToggle.setAttribute("aria-expanded", "true");
  articlesSublist.hidden = false;
  // trigger animation
  requestAnimationFrame(() => {
    articlesSublist.classList.add("is-open");
  });
}

function closeArticlesSubmenu() {
  if (!articlesToggle || !articlesSublist) return;

  articlesToggle.setAttribute("aria-expanded", "false");
  articlesSublist.classList.remove("is-open");

  // attendre la fin de l'animation pour remettre hidden
  window.setTimeout(() => {
    articlesSublist.hidden = true;
  }, 350);
}

function toggleArticlesSubmenu() {
  const isOpen = articlesToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) closeArticlesSubmenu();
  else openArticlesSubmenu();
}

/* --- Events --- */
if (menuBtn && menu) {
  menuBtn.addEventListener("click", toggleMenu);

  // Fermer le menu en cliquant sur un lien
  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

// Toggle du sous-menu Articles
if (articlesToggle && articlesSublist) {
  articlesToggle.addEventListener("click", toggleArticlesSubmenu);
}
