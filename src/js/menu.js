const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll("a");

// Sécurité si le menu n'existe pas
if (menuBtn && menu) {
  menuBtn.addEventListener("click", toggleMenu);

  // Fermer le menu au clic sur un lien
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Fermer avec ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
}

/* =========================
   Fonctions
========================= */
function toggleMenu() {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  menu.setAttribute("aria-hidden", String(isOpen));

  menuBtn.classList.toggle("is-open", !isOpen);
}

function closeMenu() {
  menuBtn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
  menuBtn.classList.remove("is-open");
}
