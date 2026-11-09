// Seminar-Laboratori 1 - Commit 09

const formulari = document.getElementById("studentForm");
const fushaEmrit = document.getElementById("emri");
const lista = document.getElementById("lista");
const kerko = document.getElementById("kerko");
const numriStudenteve =
  document.getElementById("numriStudenteve");
const mesazhi = document.getElementById("mesazhi");
const gabimi = document.getElementById("gabimi");

// Marrim studentët nga localStorage
let studentet = JSON.parse(
  localStorage.getItem("studentet") || "[]"
);

// Heqim hapësirat e panevojshme
function normalizoEmrin(emri) {
  return emri.trim().replace(/\s+/g, " ");
}

// Ruajtja e të dhënave
function ruajStudentet() {
  localStorage.setItem(
    "studentet",
    JSON.stringify(studentet)
  );
}

// Shfaqja e gabimeve
function shfaqGabim(tekst) {
  gabimi.textContent = tekst;
}

// Validimi i emrit
function kontrolloEmrin(emri, indexPerjashtuar = -1) {

  if (emri.length === 0) {
    return "Ju lutem shkruani emrin e studentit.";
  }

  if (emri.length < 3) {
    return "Emri duhet të ketë të paktën 3 karaktere.";
  }

  if (emri.length > 60) {
    return "Emri nuk mund të kalojë 60 karaktere.";
  }

  // Lejojmë shkronja, hapësira, apostrof dhe vizë
  const modeli = /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u;

  if (!modeli.test(emri)) {
    return "Emri duhet të përmbajë vetëm shkronja dhe ndarës të vlefshëm.";
  }

  // Kontrollojmë studentët e regjistruar
  const ekziston = studentet.some(function (student, index) {

    if (index === indexPerjashtuar) {
      return false;
    }

    return normalizoEmrin(student).toLocaleLowerCase("sq") ===
      emri.toLocaleLowerCase("sq");
  });

  if (ekziston) {
    return "Ky student është regjistruar më parë.";
  }

  return "";
}

// Shfaqja e studentëve
function shfaqStudentet() {

  lista.innerHTML = "";

  numriStudenteve.textContent = studentet.length;

  const tekstiKerkimit = kerko.value
    .trim()
    .toLocaleLowerCase("sq");

  let rezultate = 0;

  studentet.forEach(function (emri, index) {

    if (!emri.toLocaleLowerCase("sq").includes(tekstiKerkimit)) {
      return;
    }

    rezultate++;

    const studenti = document.createElement("li");

    const emriStudentit = document.createElement("span");
    emriStudentit.textContent = emri;

    const veprimet = document.createElement("div");
    veprimet.className = "veprimet";

    // MODIFIKO
    const butoniModifiko = document.createElement("button");
    butoniModifiko.type = "button";
    butoniModifiko.textContent = "Modifiko";
    butoniModifiko.className = "btn-modifiko";

    butoniModifiko.addEventListener("click", function () {

      const pergjigjja = prompt(
        "Shkruaj emrin e ri:",
        emri
      );

      if (pergjigjja === null) {
        return;
      }

      const emriIRi = normalizoEmrin(pergjigjja);

      const rezultat = kontrolloEmrin(emriIRi, index);

      if (rezultat !== "") {
        shfaqGabim(rezultat);
        return;
      }

      studentet[index] = emriIRi;

      ruajStudentet();
      shfaqGabim("");
      shfaqStudentet();
    });

    // FSHI
    const butoniFshi = document.createElement("button");
    butoniFshi.type = "button";
    butoniFshi.textContent = "Fshi";
    butoniFshi.className = "btn-fshi";

    butoniFshi.addEventListener("click", function () {

      studentet.splice(index, 1);

      ruajStudentet();
      shfaqGabim("");
      shfaqStudentet();
    });

    veprimet.appendChild(butoniModifiko);
    veprimet.appendChild(butoniFshi);

    studenti.appendChild(emriStudentit);
    studenti.appendChild(veprimet);

    lista.appendChild(studenti);
  });

  // Mesazhet e listës
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

// REGJISTRIMI
formulari.addEventListener("submit", function (event) {

  event.preventDefault();

  const emri = normalizoEmrin(fushaEmrit.value);

  const rezultat = kontrolloEmrin(emri);

  if (rezultat !== "") {
    shfaqGabim(rezultat);
    return;
  }

  studentet.push(emri);

  ruajStudentet();
  shfaqGabim("");
  shfaqStudentet();

  formulari.reset();
  fushaEmrit.focus();
});

// Heqim gabimin kur përdoruesi shkruan përsëri
fushaEmrit.addEventListener("input", function () {
  shfaqGabim("");
});

// KËRKIMI
kerko.addEventListener("input", shfaqStudentet);

// Nisja e aplikacionit
shfaqStudentet();
