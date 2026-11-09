
const formulari = document.getElementById("studentForm");
const fushaEmrit = document.getElementById("emri");
const lista = document.getElementById("lista");

// Lexojmë studentët e ruajtur në shfletues
let studentet = JSON.parse(
  localStorage.getItem("studentet") || "[]"
);

// Ruajtja e studentëve
function ruajStudentet() {
  localStorage.setItem(
    "studentet",
    JSON.stringify(studentet)
  );
}

// Shfaqja e listës
function shfaqStudentet() {
  lista.innerHTML = "";

  studentet.forEach(function (emri, index) {
    const studenti = document.createElement("li");

    const emriStudentit = document.createElement("span");
    emriStudentit.textContent = emri;

    const veprimet = document.createElement("div");
    veprimet.className = "veprimet";

    // Butoni Modifiko
    const butoniModifiko = document.createElement("button");
    butoniModifiko.textContent = "Modifiko";
    butoniModifiko.type = "button";
    butoniModifiko.className = "btn-modifiko";

    butoniModifiko.addEventListener("click", function () {
      const emriIRi = prompt(
        "Shkruaj emrin e ri:",
        emri
      );

      if (emriIRi !== null && emriIRi.trim() !== "") {
        studentet[index] = emriIRi.trim();
        ruajStudentet();
        shfaqStudentet();
      }
    });

    // Butoni Fshi
    const butoniFshi = document.createElement("button");
    butoniFshi.textContent = "Fshi";
    butoniFshi.type = "button";
    butoniFshi.className = "btn-fshi";

    butoniFshi.addEventListener("click", function () {
      studentet.splice(index, 1);
      ruajStudentet();
      shfaqStudentet();
    });

    veprimet.appendChild(butoniModifiko);
    veprimet.appendChild(butoniFshi);

    studenti.appendChild(emriStudentit);
    studenti.appendChild(veprimet);

    lista.appendChild(studenti);
  });
}

// Regjistrimi i studentit
formulari.addEventListener("submit", function (event) {
  event.preventDefault();

  const emri = fushaEmrit.value.trim();

  if (emri === "") {
    return;
  }

  studentet.push(emri);

  ruajStudentet();
  shfaqStudentet();

  formulari.reset();
  fushaEmrit.focus();
});

// Shfaqim studentët kur hapet faqja
shfaqStudentet();
