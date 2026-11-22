
# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)

## Sistemi i Menaxhimit të Studentëve

**Lënda:** Inxhinieri Programesh  
**Laboratori:** Seminar–Laboratori 2  
**Viti akademik:** 2026–2027  
**Versioni i dokumentit:** 1.0  
**Statusi:** Dokument fillestar për analizë dhe modelim

---

# 1. HYRJE

## 1.1 Qëllimi

Ky dokument përcakton kërkesat funksionale
dhe jofunksionale të aplikacionit
"Menaxhimi i Studentëve".

Dokumenti shërben si bazë për analizën,
projektimin, testimin dhe zhvillimin
e mëtejshëm të aplikacionit.

## 1.2 Fusha e zbatimit

Aplikacioni mundëson:

- Regjistrimin e studentëve
- Shfaqjen e listës
- Modifikimin e emrave
- Fshirjen e studentëve
- Kërkimin sipas emrit
- Numërimin e studentëve
- Validimin e të dhënave
- Ruajtjen lokale të të dhënave

Versioni aktual është një aplikacion web
që ekzekutohet në shfletues.

## 1.3 Termat dhe shkurtesat

SRS – Software Requirements Specification

UML – Unified Modeling Language

HTML – HyperText Markup Language

CSS – Cascading Style Sheets

CRUD – Create, Read, Update, Delete

RF – Kërkesë funksionale

RNF – Kërkesë jofunksionale

---

# 2. PËRSHKRIMI I SISTEMIT

## 2.1 Perspektiva e produktit

Sistemi është një aplikacion i thjeshtë web
i ndërtuar me HTML, CSS dhe JavaScript.

Të dhënat ruhen përmes localStorage
në shfletuesin e përdoruesit.

Versioni aktual nuk përdor server,
autentikim apo bazë të dhënash SQL.

## 2.2 Përdoruesit

Aktori kryesor është:

**Përdoruesi i aplikacionit**

Ai mund të regjistrojë, shikojë,
modifikojë, kërkojë dhe fshijë studentë.

Nuk ekziston ende ndarje e roleve
Administrator / Pedagog / Student.

## 2.3 Kufizimet

- Të dhënat ruhen vetëm në shfletues.
- Nuk ka sinkronizim ndërmjet pajisjeve.
- Nuk ka autentikim të përdoruesve.
- Nuk ka bazë të dhënash në server.
- Nuk ka historik të ndryshimeve të studentëve.

---

# 3. KËRKESAT FUNKSIONALE

## RF-01 – Regjistrimi i studentit

Sistemi duhet të lejojë përdoruesin
të regjistrojë një student duke
shkruar emrin e tij.

Kriter pranimi:
Studenti shfaqet në listë pas regjistrimit.

## RF-02 – Validimi i emrit

Sistemi duhet të kontrollojë që:

- Emri nuk është bosh.
- Emri ka të paktën 3 karaktere.
- Emri ka maksimumi 60 karaktere.
- Emri përmban shkronja dhe ndarës
  të vlefshëm për emrat.

Kriter pranimi:
Emrat e pavlefshëm refuzohen.

## RF-03 – Parandalimi i dublikatave

Sistemi nuk duhet të lejojë
regjistrimin e të njëjtit emër dy herë.

Kontrolli nuk duhet të varet nga
shkronjat e mëdha ose të vogla.

Kriter pranimi:
Regjistrimi i një emri ekzistues
shfaq një mesazh gabimi.

## RF-04 – Shfaqja e studentëve

Sistemi duhet të shfaqë listën
e studentëve të regjistruar.

Kriter pranimi:
Çdo student shfaqet si element i listës.

## RF-05 – Modifikimi

Përdoruesi duhet të ketë mundësi
të ndryshojë emrin e një studenti.

Edhe emri i ri duhet të validohet.

Kriter pranimi:
Emri i ndryshuar shfaqet në listë
dhe ruhet në localStorage.

## RF-06 – Fshirja

Përdoruesi duhet të ketë mundësi
të fshijë një student.

Kriter pranimi:
Studenti largohet nga lista dhe
nga të dhënat e ruajtura.

## RF-07 – Kërkimi

Sistemi duhet të lejojë kërkimin
e studentëve sipas emrit.

Kërkimi duhet të funksionojë
gjatë shtypjes së tekstit.

Kriter pranimi:
Shfaqen vetëm emrat që përputhen.

## RF-08 – Numërimi

Sistemi duhet të shfaqë numrin
total të studentëve të regjistruar.

Kriter pranimi:
Numri përditësohet pas regjistrimit
ose fshirjes së një studenti.

## RF-09 – Ruajtja e të dhënave

Sistemi duhet të ruajë studentët
në localStorage.

Kriter pranimi:
Pas rifreskimit të faqes, studentët
vazhdojnë të shfaqen.

## RF-10 – Mesazhet informuese

Sistemi duhet të shfaqë mesazh kur:

- Nuk ka studentë të regjistruar.
- Kërkimi nuk jep rezultate.
- Regjistrimi ose modifikimi ka gabime.

---

# 4. KËRKESAT JOFUNKSIONALE

## RNF-01 – Përdorshmëria

Ndërfaqja duhet të jetë e qartë,
e kuptueshme dhe e thjeshtë.

## RNF-02 – Përshtatshmëria

Ndërfaqja duhet të përshtatet
me ekranet desktop dhe mobile.

## RNF-03 – Performanca

Për listat e vogla të studentëve,
veprimet duhet të kryhen pa
vonesa të dukshme.

## RNF-04 – Mirëmbajtja

Kodi duhet të organizohet në skedarë
të ndarë HTML, CSS dhe JavaScript.

## RNF-05 – Siguria dhe privatësia

Aplikacioni nuk duhet të trajtohet
si sistem i sigurt për të dhëna reale
personale ose sensitive.

localStorage nuk ofron kontroll
aksesi në nivel përdoruesi.

---

# 5. MODELI I TË DHËNAVE

Në versionin aktual, çdo student
përfaqësohet nga një varg teksti.

Shembull:

[
  "Arlind Alla",
  "Ana Hoxha",
  "Erisa Kola"
]

Çelësi i ruajtjes në localStorage:

studentet

Ky është modeli aktual i implementuar,
jo një model i plotë i bazës së të dhënave.

---

# 6. RREGULLAT E BIZNESIT

RB-01:
Nuk lejohen emra bosh.

RB-02:
Nuk lejohen emra të dyfishtë.

RB-03:
Emrat duhet të përmbushin
rregullat e validimit.

RB-04:
Modifikimi nuk duhet të krijojë
një emër të dyfishtë.

RB-05:
Fshirja duhet të përditësojë
numrin total të studentëve.

RB-06:
Kërkimi nuk duhet të ndryshojë
të dhënat e ruajtura.

---

# 7. TESTIMI DHE VERIFIKIMI

Kërkesat duhet të kontrollohen
përmes rasteve të testimit.

Shembuj:

TC-01 – Regjistrimi i studentit

TC-02 – Parandalimi i dublikatave

TC-03 – Validimi i emrit

TC-04 – Modifikimi

TC-05 – Fshirja

TC-06 – Ruajtja pas rifreskimit

TC-07 – Kërkimi

TC-08 – Lista bosh

Rezultatet dokumentohen në:

docs/TESTIMI.md

---

# 8. ZHVILLIMET E ARDHSHME

Funksionalitete të propozuara,
ende të paimplementuara:

- Identifikues unik për çdo student
- Numër matrikullimi
- Email dhe grupi i studentit
- Autentikim dhe role
- Bazë të dhënash PostgreSQL
- API për komunikimin me serverin
- Raporte dhe eksportim të dhënash

Këto kërkesa do të analizohen dhe
specifikohen në fazat pasardhëse.

---

# 9. PËRFUNDIME

Dokumenti SRS përshkruan sjelljen
e sistemit aktual dhe kufizimet e tij.

Ai do të përdoret për krijimin e
diagrameve UML dhe për planifikimin
e zhvillimit të mëtejshëm të sistemit.
