const WA = "https://wa.me/573001007400";

const toggle = document.querySelector(".nav-toggle");
const panel = document.querySelector(".nav-panel");

toggle?.addEventListener("click", () => {
  const open = panel.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

document.querySelectorAll(".nav-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    panel?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contacto-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    "Hola, quiero agendar mi primera clase en Round 10.",
    `Nombre: ${data.get("nombre") || ""}`,
    `Celular: ${data.get("celular") || ""}`,
    `Disciplina: ${data.get("disciplina") || ""}`,
    `Horario: ${data.get("horario") || ""}`,
    `Mensaje: ${data.get("mensaje") || ""}`,
  ].join("\n");
  window.location.href = `${WA}?text=${encodeURIComponent(message)}`;
});
