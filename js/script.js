const formulari = document.getElementById("studentForm");
const fushaEmrit = document.getElementById("emri");
const lista = document.getElementById("lista");

formulari.addEventListener("submit", function (event) {
  event.preventDefault();

  const emri = fushaEmrit.value.trim();

  if (emri === "") {
    return;
  }

  // Krijojmë elementin e studentit
  const studenti = document.createElement("li");

  // Emri i studentit
  const emriStudentit = document.createElement("span");
  emriStudentit.textContent = emri;

  // Grupi i butonave
  const veprimet = document.createElement("div");
  veprimet.className = "veprimet";

  // Butoni Modifiko
  const butoniModifiko = document.createElement("button");
  butoniModifiko.textContent = "Modifiko";
  butoniModifiko.type = "button";
  butoniModifiko.className = "btn-modifiko";

  butoniModifiko.addEventListener("click", function () {
    const emriIRi = prompt(
      "Shkruaj emrin e ri të studentit:",
      emriStudentit.textContent
    );

    if (emriIRi !== null && emriIRi.trim() !== "") {
      emriStudentit.textContent = emriIRi.trim();
    }
  });

  // Butoni Fshi
  const butoniFshi = document.createElement("button");
  butoniFshi.textContent = "Fshi";
  butoniFshi.type = "button";
  butoniFshi.className = "btn-fshi";

  butoniFshi.addEventListener("click", function () {
    studenti.remove();
  });

  // Vendosim butonat paralel
  veprimet.appendChild(butoniModifiko);
  veprimet.appendChild(butoniFshi);

  // Shtojmë studentin në listë
  studenti.appendChild(emriStudentit);
  studenti.appendChild(veprimet);
  lista.appendChild(studenti);

  // Pastrojmë formularin
  formulari.reset();
  fushaEmrit.focus();
});
