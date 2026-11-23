
# VERIFIKIMI PËRFUNDIMTAR – LABORATORI 2

## Sistemi i Menaxhimit të Studentëve

**Lënda:** Inxhinieri Programesh  
**Viti akademik:** 2026–2027  
**Laboratori:** 2  
**Versioni i dokumentit:** 1.0  
**Statusi:** Në pritje të verifikimit

---

# 1. QËLLIMI

Ky dokument shërben për verifikimin e
kërkesave të sistemit dhe për kontrollin
e përputhjes ndërmjet:

- Dokumentit SRS
- Diagramit Use Case
- Diagramit Activity
- Diagramit Class
- Implementimit të aplikacionit
- Rasteve të testimit

Qëllimi është të identifikohen kërkesat
e përmbushura, problemet dhe
funksionalitetet që kërkojnë zhvillim.

---

# 2. DOKUMENTET E PROJEKTIT

| Dokumenti | Përshkrimi |
|---|---|
| SRS.md | Specifikimi i kërkesave |
| USE_CASE.md | Rastet e përdorimit |
| ACTIVITY.md | Rrjedha e regjistrimit |
| CLASS.md | Modeli konceptual i klasave |
| TESTIMI.md | Testet e mëparshme |
| VERIFIKIMI_LABORATORIT_2.md | Verifikimi përfundimtar |

---

# 3. MATRICA E GJURMUESHMËRISË

Matrica lidh kërkesat me modelimin UML
dhe rastet përkatëse të testimit.

| Kërkesa | Use Case | Testi |
|---|---|---|
| RF-01 Regjistrimi | UC-01 | TC-01 |
| RF-02 Validimi | UC-07 | TC-03 |
| RF-03 Dublikatat | UC-07 | TC-02 |
| RF-04 Shfaqja e listës | UC-02 | TC-01 |
| RF-05 Modifikimi | UC-04 | TC-04 |
| RF-06 Fshirja | UC-05 | TC-05 |
| RF-07 Kërkimi | UC-03 | TC-07 |
| RF-08 Numërimi | UC-06 | TC-09 |
| RF-09 Ruajtja | UC-01, UC-04, UC-05 | TC-06 |
| RF-10 Mesazhet | UC-01, UC-03 | TC-08, TC-10 |

Diagrami Activity trajton në detaje
procesin e RF-01, RF-02, RF-03 dhe RF-09.

Diagrami Class paraqet modelin objektor
të propozuar për zhvillimin e ardhshëm.

---

# 4. TESTET FUNKSIONALE

## TC-01 – Regjistrimi i studentit

Hapat:
1. Hap aplikacionin.
2. Shkruaj "Arlind Alla".
3. Kliko "Shto studentin".

Rezultati i pritshëm:
Studenti shfaqet në listë.

Statusi: Për t'u testuar.

## TC-02 – Kontrolli i dublikatave

Hapat:
1. Regjistro "Arlind Alla".
2. Provo të regjistrosh përsëri
   të njëjtin emër.

Rezultati i pritshëm:
Regjistrimi i dytë refuzohet dhe
shfaqet mesazhi përkatës.

Statusi: Për t'u testuar.

## TC-03 – Validimi i emrit

Hapat:
1. Provo të regjistrosh një emër bosh.
2. Provo një emër me 2 karaktere.
3. Provo një emër mbi 60 karaktere.
4. Provo karaktere të palejuara.

Rezultati i pritshëm:
Sistemi refuzon të dhënat e pavlefshme.

Statusi: Për t'u testuar.

## TC-04 – Modifikimi

Hapat:
1. Regjistro një student.
2. Kliko "Modifiko".
3. Ndrysho emrin.
4. Konfirmo ndryshimin.

Rezultati i pritshëm:
Emri i ri shfaqet dhe ruhet.

Statusi: Për t'u testuar.

## TC-05 – Fshirja

Hapat:
1. Regjistro një student.
2. Kliko "Fshi".

Rezultati i pritshëm:
Studenti largohet nga lista.

Statusi: Për t'u testuar.

## TC-06 – Ruajtja në localStorage

Hapat:
1. Regjistro dy studentë.
2. Rifresko faqen.
3. Modifiko një student.
4. Rifresko përsëri.

Rezultati i pritshëm:
Ndryshimet mbeten të ruajtura.

Statusi: Për t'u testuar.

## TC-07 – Kërkimi

Hapat:
1. Regjistro disa studentë.
2. Shkruaj një pjesë të emrit
   në fushën e kërkimit.

Rezultati i pritshëm:
Shfaqen vetëm studentët që përputhen.

Statusi: Për t'u testuar.

## TC-08 – Lista bosh

Hapat:
1. Hap aplikacionin pa studentë.
2. Kontrollo zonën e listës.

Rezultati i pritshëm:
Shfaqet një mesazh informues
që lista është bosh.

Statusi: Për t'u testuar.

## TC-09 – Numërimi

Hapat:
1. Regjistro një student.
2. Regjistro një student tjetër.
3. Fshi njërin.

Rezultati i pritshëm:
Numri total ndryshon nga 1
në 2 dhe pastaj në 1.

Statusi: Për t'u testuar.

## TC-10 – Kërkimi pa rezultate

Hapat:
1. Regjistro disa studentë.
2. Kërko një emër që nuk ekziston.

Rezultati i pritshëm:
Shfaqet mesazhi se nuk u gjet
asnjë student.

Statusi: Për t'u testuar.

---

# 5. TESTET JOFUNKSIONALE

## RNF-01 – Përdorshmëria

Kontrollo që:
- Butonat janë të kuptueshëm.
- Formulari është i qartë.
- Mesazhet janë të lexueshme.

Statusi: Për t'u verifikuar.

## RNF-02 – Përshtatshmëria

Kontrollo aplikacionin në:
- Kompjuter
- Tablet
- Telefon

Statusi: Për t'u verifikuar.

## RNF-03 – Performanca

Regjistro disa dhjetëra studentë
dhe kontrollo reagimin e aplikacionit.

Statusi: Për t'u verifikuar.

## RNF-04 – Mirëmbajtja

Kontrollo organizimin e kodit:

- index.html
- css/styles.css
- js/script.js

Statusi: Për t'u verifikuar.

## RNF-05 – Privatësia

Konfirmo që të dhënat ruhen
lokalisht në shfletues.

Aplikacioni nuk duhet përdorur
për ruajtjen e të dhënave sensitive.

Statusi: Për t'u verifikuar.

---

# 6. KONTROLLI I DIAGRAMEVE UML

## Use Case

- [ ] Aktori është jashtë sistemit.
- [ ] Rastet e përdorimit janë brenda.
- [ ] Lidhjet Association janë të sakta.
- [ ] Lidhjet include kanë drejtimin e duhur.

## Activity

- [ ] Initial Node është në fillim.
- [ ] Activity Final është në fund.
- [ ] Veprimet janë në rendin e duhur.
- [ ] Vendimet kanë kushtet Po/Jo.
- [ ] Rrjedhat e gabimeve janë të modeluara.

## Class

- [ ] Janë përcaktuar tri klasat.
- [ ] Atributet kanë tipe të dhënash.
- [ ] Metodat kanë parametra dhe tipe kthimi.
- [ ] Marrëdhëniet UML janë të sakta.
- [ ] Modeli shënohet si i propozuar.

---

# 7. REGJISTRI I PROBLEMEVE

Për çdo problem të identifikuar
plotëso informacionin:

| ID | Problemi | Kërkesa | Statusi |
|---|---|---|---|
| P-01 | Për t'u plotësuar | - | Hapur |

Problemet e konfirmuara duhet
të korrigjohen në commit-e të veçanta.

---

# 8. KRITERET E PRANIMIT

Laboratori konsiderohet i përfunduar
kur:

- Dokumenti SRS është përgatitur.
- Tri diagramet UML janë dokumentuar.
- Skedarët drawio dhe PNG janë ruajtur.
- Matrica e gjurmueshmërisë është plotësuar.
- Testet janë ekzekutuar dhe dokumentuar.
- Mospërputhjet janë identifikuar.
- Dokumentacioni është publikuar në GitHub.

Një test konsiderohet i kaluar
vetëm pasi rezultati real përputhet
me rezultatin e pritshëm.

---

# 9. PËRFUNDIME

Seminar–Laboratori 2 dokumenton
kërkesat, proceset dhe modelin
konceptual të sistemit.

Rezultatet e testimit do të përdoren
për të planifikuar zhvillimet
e laboratorëve të ardhshëm.

Modeli objektor i Class Diagram
nuk konsiderohet ende i implementuar.
