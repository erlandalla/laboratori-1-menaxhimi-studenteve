// Seminar-Laboratori 1 - JavaScript

// Elementet HTML
const formulari = document.getElementById("studentForm");
const fushaEmrit = document.getElementById("emri");
const lista = document.getElementById("lista");
const kerko = document.getElementById("kerko");
const numriStudenteve = document.getElementById("numriStudenteve");
const mesazhi = document.getElementById("mesazhi");

// Lexojmë studentët nga localStorage
let studentet = JSON.parse(
  localStorage.getItem("studentet") || "[]"
);

// Ruajtja e të dhënave
function ruajStudentet() {
  localStorage.setItem(
    "studentet",
    JSON.stringify(studentet)
  );
}

// Shfaqja e studentëve
function shfaqStudentet() {

  lista.innerHTML = "";

  // Numri total
  numriStudenteve.textContent = studentet.length;

  // Kërkimi
  const tekstiKerkimit = kerko.value
    .trim()
    .toLowerCase();

  let rezultate = 0;

  studentet.forEach(function (emri, index) {

    if (!emri.toLowerCase().includes(tekstiKerkimit)) {
      return;
    }

    rezultate++;

    // Elementi i studentit
    const studenti = document.createElement("li");

    // Emri
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

    // Shtojmë butonat
    veprimet.appendChild(butoniModifiko);
    veprimet.appendChild(butoniFshi);

    // Ndërtojmë elementin
    studenti.appendChild(emriStudentit);
    studenti.appendChild(veprimet);

    lista.appendChild(studenti);
  });

  // Mesazhet informuese
  if (studentet.length === 0) {

    mesazhi.textContent =
      "Nuk ka studentë të regjistruar.";

  } else if (rezultate === 0) {

    mesazhi.textContent =
      "Nuk u gjet asnjë student.";

  } else {

    mesazhi.textContent = "";
  }
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

// Kërkimi në kohë reale
kerko.addEventListener("input", shfaqStudentet);

// Shfaqja fillestare
shfaqStudentet();