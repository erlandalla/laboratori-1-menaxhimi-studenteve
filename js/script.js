const formulari = document.getElementById("studentForm");
const fushaEmrit = document.getElementById("emri");
const lista = document.getElementById("lista");

formulari.addEventListener("submit", function (event) {
  event.preventDefault();

  const emri = fushaEmrit.value.trim();

  if (emri === "") {
    return;
  }

  const studenti = document.createElement("li");
  studenti.textContent = emri;

  lista.appendChild(studenti);

  formulari.reset();
  fushaEmrit.focus();
});
