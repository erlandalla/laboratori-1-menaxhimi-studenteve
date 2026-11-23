
# Diagrami UML i Klasave

## Seminar–Laboratori 2

**Projekti:** Menaxhimi i Studentëve

**Lënda:** Inxhinieri Programesh

**Versioni:** 1.0

## 1. Qëllimi

Diagrami i klasave paraqet modelin
konceptual objektor të sistemit.

Ai përdoret për të planifikuar
organizimin e kodit në fazat
e ardhshme të zhvillimit.

## 2. Gjendja aktuale

Aplikacioni aktual përdor HTML,
CSS dhe JavaScript.

Studentët ruhen si vargje teksti
në një strukturë JavaScript.

Të dhënat ruhen në localStorage.

Klasat e paraqitura në këtë dokument
nuk janë implementuar ende.

## 3. Klasa Studenti

Përfaqëson një student.

Atributet:

- emri: String

Metodat:

- merrEmrin()
- ndryshoEmrin()

## 4. Klasa MenaxhuesiStudenteve

Menaxhon koleksionin e studentëve.

Atributet:

- studentet: Studenti[]

Metodat:

- regjistroStudentin()
- modifikoStudentin()
- fshiStudentin()
- kerkoStudentet()
- numeroStudentet()
- validoEmrin()

## 5. Klasa RuajtjaLokale

Menaxhon ruajtjen dhe leximin
e të dhënave nga localStorage.

Atributet:

- celesi: String

Metodat:

- lexoStudentet()
- ruajStudentet()

## 6. Marrëdhëniet UML

MenaxhuesiStudenteve menaxhon
zero ose shumë objekte Studenti.

MenaxhuesiStudenteve përdor
RuajtjaLokale për ruajtjen
dhe leximin e të dhënave.

## 7. Lidhja me kërkesat SRS

RF-01 – Regjistrimi

RF-02 – Validimi

RF-03 – Parandalimi i dublikatave

RF-04 – Shfaqja e listës

RF-05 – Modifikimi

RF-06 – Fshirja

RF-07 – Kërkimi

RF-08 – Numërimi

RF-09 – Ruajtja lokale

## 8. Kufizimet e modelit

Modeli është konceptual.

Nuk përfshin ende:

- Identifikues unik
- Autentikim
- Role përdoruesish
- Bazë të dhënash SQL
- API

Kalimi nga vargjet e tekstit
te objektet Studenti do të kërkojë
ndryshime në implementimin ekzistues.

## 9. Skedarët e diagramit

- diagrami-klasave.drawio
- diagrami-klasave.png

## 10. Përfundime

Diagrami i klasave shërben si
bazë për ristrukturimin e aplikacionit
drejt një modeli objektor.

Ai dokumenton përgjegjësitë
dhe marrëdhëniet e propozuara
ndërmjet klasave.
