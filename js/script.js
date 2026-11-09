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

  // Krijojmë tekstin e emrit
  const emriStudentit = document.createElement("span");
  emriStudentit.textContent = emri;

  // Krijojmë butonin Fshi
  const butoniFshi = document.createElement("button");
  butoniFshi.textContent = "Fshi";
  butoniFshi.type = "button";
  butoniFshi.className = "btn-fshi";

  // Funksioni i fshirjes
  butoniFshi.addEventListener("click", function () {
    studenti.remove();
  });

  // Shtojmë elementet në listë
  studenti.appendChild(emriStudentit);
  studenti.appendChild(butoniFshi);
  lista.appendChild(studenti);

  // Pastrojmë formularin
  formulari.reset();
  fushaEmrit.focus();
});
